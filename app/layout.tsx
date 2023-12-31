import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './navbar';
import Title from './scottwozniak'
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SurfC',
  description: 'Generated by create next app',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <Head>
        <img src="/Images/wave.png"/>
      </Head>
      <body className={inter.className}>
      <Title />
      <div className="navbar">
      <NavBar/>
      </div>
        {children}
        </body>
    </html>
  )
}
