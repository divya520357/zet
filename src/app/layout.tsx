import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZET : Become a Certified Financial Advisor and Earn Big',
  description: 'Want to earn extra money from home? Download ZET, the best earning app without investment in India. Start your online business today and make regular income by selling financial products like credit cards, loans, saving accounts & other banking products.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
      

      
      
    </html>
  )
 
}
