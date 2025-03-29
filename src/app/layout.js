import { Geist_Mono } from 'next/font/google';
import './globals.css';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: "Hi, it's Mandeep :)",
  description: "It's my personal site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={` ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
