import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div><Toaster/></div>
        {children}
      </body>
    </html>
  )
}
