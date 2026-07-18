import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import ClientLayout from './client-layout';
import '@/styles/index.css';

export const metadata: Metadata = {
  title: 'Erika Milevskaya | Frontend Developer',
  description: 'Web-developer, about me, my works',
  icons: {
    icon: '/icons/icon-planet.svg',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="root">
          <ClientLayout>{children}</ClientLayout>
        </div>
      </body>
    </html>
  );
}
