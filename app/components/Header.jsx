import Link from 'next/link'

const Header = ({title = '', tags = false}) => {
  return (
    <header className='py-14 px-4 mb-12 text-center border-b dark:border-pink-900'>
      <h2 className='uppercase text-2xl mx-auto max-w-2xl font-bold'>{title}</h2>

      {tags && (
        <div className='text-xs mt-2 hover:text-pink-500'>
          <Link href='/tag'>#tags</Link>
        </div>
      )}
    </header>
  )
}

export default Header
