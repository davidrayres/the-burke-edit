import {client} from '@/sanity/lib/client'
import Header from '@/app/components/Header'
// import {Post} from '@/utils/interface'
import PostComponent from '@/app/components/PostComponent'

async function getPosts() {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `
  const data = await client.fetch(query)
  return data
}

export const revalidate = 60 //tells nextjs to look for new posts every 60 seconds

export default async function Home() {
  const posts = await getPosts()
  console.log(posts, 'posts')

  return (
    <div>
      <Header title='Articles' tags />
      <div>{posts?.length > 0 && posts?.map(post => <PostComponent key={post?._id} post={post} />)}</div>
    </div>
  )
}
