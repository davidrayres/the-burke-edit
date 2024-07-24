// import {Metadata} from 'next'
import {Fira_Code} from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/Navbar'
import {Provider} from '@/utils/Provider'

const firaCode = Fira_Code({subsets: ['latin']})

export const metadata = {
  metadataBase: new URL('https://the-burke-edit.vercel.app/'),
  title: {
    default: 'The Burke Edit',
    template: '%s | The Burke Edit',
  },
  description: 'Everything Burkley Ayres!',
  openGraph: {
    title: 'The Burke Edit',
    description: 'Everything Burkley Ayres!',
    type: 'website',
    locale: 'en_US',
    url: 'https://the-burke-edit.vercel.app/',
    siteName: 'The Burke Edit',
  },
}

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={`${firaCode.className} h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-pink-500`}>
        <Provider>
          <Navbar />
          <main className='h-full mx-auto max-w-5xl px-6'>{children}</main>
        </Provider>
      </body>
    </html>
  )
}
