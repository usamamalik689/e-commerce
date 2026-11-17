import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { TooltipProvider } from '@/components/ui/tooltip';

export const metadata: Metadata = { title: 'Toys Hutch | Plush Toys in Pakistan', description: 'Adorable plushies, teddy bears and cozy gifts delivered across Pakistan.' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
