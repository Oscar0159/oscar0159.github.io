import '@/styles/globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Geist, Geist_Mono } from 'next/font/google'

import MenuBar from '@/components/menu-bar'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'ArcherWn\'s Portfolio',
    description: 'Showcasing my projects, skills, and experience in web development and software engineering.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] antialiased`}
            >
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <header className="fixed top-0 z-10 flex h-18 w-full items-center justify-between px-[15%]">
                        <MenuBar />
                    </header>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
