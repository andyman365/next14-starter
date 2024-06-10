import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/NavBar'
import Footer from './components/footer/footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default:"next.js 14 homepage",
    template:"%s | next.js 14"
  },
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
        <Navbar />{children}
      <Footer />
        </div>

      </body>
      
    </html>
  )
}