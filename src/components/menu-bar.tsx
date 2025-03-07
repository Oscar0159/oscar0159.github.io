import Link from 'next/link'

import ThemeButton from '@/components/theme-button'

export default function MenuBar() {
    return (
        <div className="flex w-full items-center justify-between">
            <h1 className="text-2xl font-bold">ArcherWn</h1>

            {/* navigation links */}
            <div className="flex items-center gap-[5rem]">
                <Link
                    href="/#home"
                    className="rounded-full p-2 text-center font-bold transition-colors duration-300 hover:text-orange-400 dark:hover:text-orange-300"
                >
                    Home
                </Link>
                <Link
                    href="/#about"
                    className="rounded-full p-2 text-center font-bold transition-colors duration-300 hover:text-orange-400 dark:hover:text-orange-300"
                >
                    About
                </Link>
                <Link
                    href="/#projects"
                    className="rounded-full p-2 text-center font-bold transition-colors duration-300 hover:text-orange-400 dark:hover:text-orange-300"
                >
                    Projects
                </Link>
                <Link
                    href="/#contact"
                    className="rounded-full p-2 text-center font-bold transition-colors duration-300 hover:text-orange-400 dark:hover:text-orange-300"
                >
                    Contact
                </Link>
            </div>

            <ThemeButton />
        </div>
    )
}
