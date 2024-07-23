import BlogPosts from '@/app/components/BlogPosts'
import {getPost} from '@/app/ghost/posts'
import styles from '@/app/page.module.css'

export default async function Post({params}) {
  const postSlug = params.postSlug
  const post = await getPost(postSlug)
  console.log(postSlug)
  console.log('FULL POST', post)

  return (
    <main className={styles.main}>
      <h1>Posts</h1>
      <BlogPosts title={post.title} plainText={post.plaintext} />
    </main>
  )
}
