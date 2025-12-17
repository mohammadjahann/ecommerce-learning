import React, { type ReactNode } from 'react'
import { motion } from "framer-motion";

type cardProps = {
    children: ReactNode,
    style?: string,
    transform: string[],
    duration:number
}

const FloatingCard = ({ children, style, transform ,duration}: cardProps) => {
    return (
        <motion.div
            animate={{
                transform: transform
            }}
            transition={{
                repeat: Infinity,
                duration: duration,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1] 
            }}
            style={{
                willChange: 'transform',
            }}
            className={`${style} flex absolute justify-center items-center gap-2 px-4 py-2 rounded-lg bg-white/10 dark:bg-black/30 backdrop-blur-sm border border-white/30 text-white font-medium shadow-lg z-30 `}
        >
            {children}
        </motion.div>
    )
}

export default FloatingCard
