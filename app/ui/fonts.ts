// app/ui/fonts.ts
import { Lusitana } from 'next/font/google';
import { Inter } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'], // It is mandatory to specify a subset
});