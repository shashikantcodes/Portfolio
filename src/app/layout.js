import LayoutWrapper from '@/components/LayoutWrapper'; // Humne jo upar banaya wo yaha import kiya
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Shashikant | Full Stack Developer',
  description: 'Portfolio of Shashikant - PHP & Web Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        {/* Sara logic LayoutWrapper sambhalega */}
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
