import Link from 'next/link'
import {VT323, Poppins} from 'next/font/google'
// import {Post} from '../utils/interface'

const font = Poppins({weight: '400', subsets: ['latin']})
const dateFont = VT323({weight: '400', subsets: ['latin']})

const PostComponent = ({post}) => {
console.log('POST----------------',post)
  return (
    <div className={cardStyle}>
      <Link href={`/posts/${post?.slug?.current}`}>
        <h2 className={`${font.className} text-2xl dark:text-slate-300`}>{post?.title}</h2>
        <p className={`${dateFont.className} my-2 text-pink-500`}>{new Date(post?.publishedAt).toDateString()}</p>
        <p className='dark:text-gray-400 mb-4 line-clamp-2'>{post?.excerpt}</p>
      </Link>

      <div>
        {post?.tags?.map(tag => (
          <span key={tag?._id} className='mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900'>
            #{tag?.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default PostComponent

const cardStyle = `
mb-8
p-4
border
border-gray-900
rounded-md
shadow-sm
shadow-pink-950
hover:shadow-md
hover:bg-pink-500
hover:text-white
hover:dark:bg-pink-500
hover:dark:bg-opacity-20
`
