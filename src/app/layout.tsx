import type { Metadata } from 'next';
import { workSans } from '@/exports/fonts';
import '@/styles/global.css';

export const metadata: Metadata = {
    title: 'Authy',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={workSans.className}>{children}</body>
        </html>
    );
}
