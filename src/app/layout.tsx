import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'My Awesome Next App',
    description: 'A basic Next.js layout file',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}