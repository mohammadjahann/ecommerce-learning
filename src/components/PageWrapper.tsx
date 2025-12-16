import React, { type ReactNode } from 'react'
import { motion, type Variants } from "framer-motion";

const transition = {
    duration: 1,
    ease: [0.16, 1, 0.3, 1] as const
};

const variants : Variants  = {
    initial: {
        opacity: 0,
        y: 40,
        filter: "blur(30px)"
    },
    animate: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition
    },
    exit: {
        opacity: 0,
        y: -40,
        filter: "blur(30px)",
        transition
    },
};

const PageWrapper = ({ children } :{children:ReactNode}) => {
    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ minHeight: "10vh" }}
        >
            {children}
        </motion.div>
    )
}

export default PageWrapper