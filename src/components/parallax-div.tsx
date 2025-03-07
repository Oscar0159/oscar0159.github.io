'use client'

import { MotionProps, motion, useAnimate, useMotionValue, useSpring, useTransform, useWillChange } from 'motion/react'
import { MouseEvent, useEffect, useRef } from 'react'

export default function ParallaxDiv({
    children,
    degree = 5,
    ...props
}: MotionProps & React.ComponentProps<'div'> & { degree?: number }) {
    const [scope, animate] = useAnimate()
    const rectMemo = useRef<DOMRect | null>(null)

    const willChange = useWillChange()

    const x = useMotionValue(0.5)
    const y = useMotionValue(0.5)

    const rotateX = useSpring(useTransform(y, [0, 1], [degree, -degree]))
    const rotateY = useSpring(useTransform(x, [0, 1], [-degree, degree]))

    const handleMouseMove = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        const { clientX, clientY } = e

        if (!rectMemo.current) {
            rectMemo.current = e.currentTarget.getBoundingClientRect()
            console.log(rectMemo.current)
        }

        const { left, top, width, height } = rectMemo.current

        const newX = (clientX - left) / width
        const newY = (clientY - top) / height

        animate(x, newX)
        animate(y, newY)

        console.log({ x: newX, y: newY })
    }

    const handleMouseLeave = () => {
        animate(x, 0.5)
        animate(y, 0.5)
    }

    useEffect(() => {
        const handleResize = () => {
            rectMemo.current = null
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <motion.div
            ref={scope}
            className={props.className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: rotateX,
                rotateY: rotateY,
                willChange,
                ...props.style,
            }}
            {...props}
        >
            {children}
        </motion.div>
    )
}
