import Link from 'next/link'

const blogStyles = {
  border: '1px solid white',
  padding: '20px',
  margin: '20px',
  background: 'rgb(255, 255, 255, .2)',
}

export default function BlogPosts({postSlug, title, plainText, excerpt = null}) {
  return (
    <div style={blogStyles}>
      <h3>{title}</h3>
      <p>{excerpt ? excerpt : plainText}</p>
      {excerpt && <Link href={`/posts/${postSlug}`}>View Post</Link>}
    </div>
  )
}
