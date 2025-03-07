'use client'

import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

import ParallaxDiv from '@/components/parallax-div'

export default function Home() {
    const { scrollYProgress } = useScroll({
        offset: ['start start', 'end end'],
    })

    const cardTranslateY = useSpring(useTransform(scrollYProgress, [0 + 1 / 12, 1 / 4], ['0%', '100%']), {
        stiffness: 100,
        damping: 15,
    })
    const cardTranslateX = useSpring(useTransform(scrollYProgress, [0 + 1 / 12, 1 / 4], ['0%', '-120%']), {
        stiffness: 100,
        damping: 15,
    })
    const cardRotateY = useSpring(useTransform(scrollYProgress, [0 + 1 / 12, 1 / 4], ['0deg', '-180deg']), {
        stiffness: 100,
        damping: 15,
    })

    const skills = ['C/C++', 'Python', 'Java', 'React']

    return (
        <div>
            {/* background */}
            <div className="bg-secondary fixed inset-0 -z-1 bg-[radial-gradient(#ccc_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] dark:bg-[radial-gradient(#444_1px,transparent_1px)] dark:[mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]"></div>

            <main className="overflow-hidden px-[15%]">
                {/* home */}
                <div id="home" className="grid h-dvh items-center justify-center perspective-distant lg:grid-cols-2">
                    <div className="flex flex-col items-center justify-center gap-2 text-center lg:ms-[10%] lg:items-start lg:justify-normal lg:text-left">
                        <h5 className="text-sm font-bold">Software Engineer</h5>
                        <h1 className="text-4xl font-bold lg:text-6xl">Hi, I&apos;m Oscar</h1>
                        <div className="flex flex-wrap justify-center gap-2 lg:w-2/3 lg:justify-normal">
                            {skills.map((skill, index) => (
                                <Badge key={index}>{skill}</Badge>
                            ))}
                        </div>
                    </div>
                    <motion.div
                        className="relative mx-[5%] flex h-full flex-col transform-3d lg:mx-[10%] lg:justify-center"
                        style={{
                            translateX: cardTranslateX,
                            translateY: cardTranslateY,
                            rotateY: cardRotateY,
                        }}
                    >
                        <ParallaxDiv
                            className="relative flex h-[50%] items-center justify-center transform-3d lg:h-[30%]"
                            degree={10}
                        >
                            <AspectRatio ratio={3 / 2}>
                                <Card className="bg-secondary absolute h-full w-full -translate-z-[4px] rotate-y-180 shadow-lg brightness-125"></Card>
                                <Card className="bg-secondary absolute h-full w-full translate-z-[4px] overflow-hidden shadow-lg brightness-125"></Card>
                            </AspectRatio>
                        </ParallaxDiv>
                    </motion.div>
                </div>

                {/* about */}
                <div id="about" className="grid h-dvh lg:grid-cols-2 lg:items-center">
                    <div></div>

                    <div className="flex flex-col gap-2 lg:mx-[15%]">
                        <ol className="relative border-s border-gray-200 dark:border-gray-700">
                            <motion.li
                                className="ms-4 mb-10"
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 1.5,
                                }}
                            >
                                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-gray-100 bg-gray-200 dark:border-gray-800 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm text-gray-400 dark:text-gray-500">August 2018</time>
                                <h3 className="font-semibold text-gray-900 lg:text-lg dark:text-white">
                                    Bachelor of National Taiwan Ocean University
                                </h3>
                                <p className="mb-4 text-sm font-normal text-gray-500 lg:text-base dark:text-gray-400">
                                    I majored in Communications, Navigation and Control Engineering. Concurrently, I
                                    served as a research assistant in a laboratory.
                                </p>
                            </motion.li>
                            <motion.li
                                className="ms-4 mb-10"
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 1.7,
                                }}
                            >
                                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-gray-100 bg-gray-200 dark:border-gray-800 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm text-gray-400 dark:text-gray-500">August 2022</time>
                                <h3 className="font-semibold text-gray-900 lg:text-lg dark:text-white">
                                    Master of National Taiwan Ocean University
                                </h3>
                                <p className="mb-4 text-sm font-normal text-gray-500 lg:text-base dark:text-gray-400">
                                    I continued my studies, focusing on the field of navigation. During this period, I
                                    worked closely with our professor, participating in various projects.
                                </p>
                            </motion.li>
                            <motion.li
                                className="ms-4"
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 2,
                                }}
                            >
                                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-gray-100 bg-orange-200 dark:border-gray-800 dark:bg-orange-300"></div>
                                <time className="mb-1 text-sm text-gray-400 dark:text-gray-500">August 2024</time>
                                <h3 className="font-semibold text-gray-900 lg:text-lg dark:text-white">
                                    Looking for a job ...
                                </h3>
                                <p className="mb-4 text-sm font-normal text-gray-500 lg:text-base dark:text-gray-400">
                                    After completing four months of military journey, I&apos;m ready to bring my skills
                                    and enthusiasm to a dynamic team.
                                </p>
                            </motion.li>
                        </ol>
                    </div>
                </div>

                {/* project */}
                <div
                    id="projects"
                    className="flex h-dvh flex-col items-center gap-4 pt-24 pb-4 perspective-distant lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-20 lg:pt-0 lg:pb-0"
                >
                    <a
                        href="https://github.com/Oscar0159/df2-helper"
                        className="group z-2 h-full w-full lg:translate-y-[30%]"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <ParallaxDiv
                            className="flex h-full w-full flex-col justify-center gap-5"
                            initial={{
                                opacity: 0,
                                x: -150,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 1,
                            }}
                        >
                            <AspectRatio ratio={16 / 9}>
                                <Card className="relative h-full overflow-hidden shadow-lg transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-orange-200 dark:group-hover:shadow-orange-300">
                                    <Image
                                        className="transition-transform duration-300 group-hover:scale-105"
                                        src="https://raw.githubusercontent.com/Oscar0159/df2-helper/develop/readme_images/puzzle-page-demo.gif"
                                        alt="df2-helper"
                                        fill
                                    />
                                </Card>
                            </AspectRatio>
                            <div className="h-[20%] w-full">
                                <h3 className="text-center text-2xl font-bold transition-colors duration-300 group-hover:text-orange-400 lg:text-left lg:text-4xl dark:group-hover:text-orange-300">
                                    DF2 Helper
                                </h3>
                                <p className="hidden text-lg lg:block">
                                    Website that provides information and tools about the game Dead Frontier 2. Ex. Map,
                                    Puzzle Solver
                                </p>
                            </div>
                        </ParallaxDiv>
                    </a>
                    <a
                        href="https://github.com/Oscar0159/MapRights"
                        className="group z-2 h-full w-full lg:translate-y-[70%]"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <ParallaxDiv
                            className="flex h-full w-full flex-col justify-center gap-5"
                            initial={{
                                opacity: 0,
                                x: 150,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 1,
                            }}
                        >
                            <AspectRatio ratio={16 / 9}>
                                <Card className="relative h-full overflow-hidden shadow-lg transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-orange-200 dark:group-hover:shadow-orange-300">
                                    <Image
                                        className="transition-transform duration-300 group-hover:scale-105"
                                        src="https://raw.githubusercontent.com/Oscar0159/MapRights/develop/assets/MapRightsCopyDenied.gif"
                                        alt="map-right"
                                        fill
                                    />
                                </Card>
                            </AspectRatio>

                            <div className="h-[20%] w-full">
                                <h3 className="text-center text-2xl font-bold transition-colors duration-300 group-hover:text-orange-400 lg:text-left lg:text-4xl dark:group-hover:text-orange-300">
                                    Map Right
                                </h3>
                                <p className="hidden text-lg lg:block">
                                    A Minecraft plugin that allows players to sign maps, protecting their creations from
                                    unauthorized copying.
                                </p>
                            </div>
                        </ParallaxDiv>
                    </a>
                    <div className="flex justify-center lg:col-span-2">
                        <Link href="/#projects" className="group lg:translate-y-[200%]">
                            <motion.button
                                className="cursor-pointer rounded-full px-4 py-2 text-2xl ring-2 transition-colors duration-300 group-hover:text-orange-400 dark:group-hover:text-orange-300"
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 1,
                                }}
                            >
                                See More
                            </motion.button>
                        </Link>
                    </div>
                </div>

                {/* contact */}
                <div id="contact" className="perspective-distance flex h-dvh items-center justify-center">
                    <div className="flex h-[70%] w-full flex-col justify-between py-10 lg:grid lg:grid-cols-8 lg:grid-rows-5">
                        <ParallaxDiv
                            className="col-span-2 col-start-1 row-span-3 lg:translate-x-1/3"
                            initial={{
                                opacity: 0,
                                x: -50,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                        >
                            <Card className="bg-secondary h-full w-full shadow-lg brightness-125"></Card>
                        </ParallaxDiv>
                        <ParallaxDiv
                            className="col-span-2 col-start-4 row-span-3 row-start-3 lg:translate-y-1/5"
                            initial={{
                                opacity: 0,
                                y: 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1.1,
                            }}
                        >
                            <Card className="bg-secondary h-full w-full shadow-lg brightness-125"></Card>
                        </ParallaxDiv>
                        <ParallaxDiv
                            className="col-span-2 col-start-7 row-span-3 row-start-2 lg:-translate-x-1/5"
                            initial={{
                                opacity: 0,
                                x: 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                        >
                            <Card className="bg-secondary h-full w-full shadow-lg brightness-125"></Card>
                        </ParallaxDiv>
                    </div>
                </div>
            </main>
        </div>
    )
}
