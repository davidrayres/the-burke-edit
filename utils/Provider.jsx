'use client'
import {ThemeProvider} from 'next-themes'

export const Provider = ({children}) => {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}
