import Header from '@/app/components/Header'
import {client} from '@/sanity/lib/client'
import Link from 'next/link'

async function getAllTags() {
  const query = `
  *[_type == "tag"] {
    name,
    slug,
    _id,
    "postCount": count(*[_type == "post" && references("tags", ^._id)])
  }
  `
  const tags = client.fetch(query)
  return tags
}

export const revalidate = 60

export const metadata = {
  title: 'Tags',
  description: 'Search for posts by tags on the blog',
}

const page = async () => {
  const tags = await getAllTags()
  console.log(tags, 'tags')
  return (
    <div>
      <Header title='Tags' />
      <div>
        {tags?.length > 0 &&
          tags?.map(tag => (
            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
              <div className='mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 hover:text-pink-500'>
                #{tag.name} ({tag?.postCount})
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default page
