import './globals.css'
import { Inter } from 'next/font/google'

import Timer from "./components/timer/Timer";
import Navbar from './components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pomidoras',
  description: 'Pirmas projektas su next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        

        <Navbar/>
        <Timer />
        
        
        
        {children}</body>
    </html>
  )
}
