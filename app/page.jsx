import Image from 'next/image'
import {getPosts} from './ghost/posts'
import BlogPosts from './components/BlogPosts'

export default async function Home() {
  const blogPosts = await getPosts()
  // console.log(blogPosts[0])
  return (
    <main className=''>
      <h1>Blog Feed</h1>
      {blogPosts.map(post => {
        return <BlogPosts key={post.id} postSlug={post.slug} title={post.title} plainText={post.plainText} excerpt={post.excerpt} />
      })}
    </main>
  )
}
