

'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import Footer from '../components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import NavbarSingle from '@/components/single-website/NavbarSingle';
import FooterSingle from '@/components/single-website/FooterSingle';
import metadata from './metadata';
import NewNavbarForBlog from '@/components/blog/NewNavbarForBlog';

const inter = Inter({ subsets: ['latin'], weight: ['300','400','500','700','900'] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isSingleWebsitePage = pathname === '/single-website';
  const isBlogPage = /^\/blog(\/.+)?$/.test(pathname);
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
    
        {isSingleWebsitePage && <NavbarSingle />}
        {isBlogPage && <NewNavbarForBlog />}
        {!isSingleWebsitePage && !isBlogPage && <Navbar />}
        {children}
        {isSingleWebsitePage ? <FooterSingle /> : <Footer />} 
       
      </body>
    </html>
  );
}
