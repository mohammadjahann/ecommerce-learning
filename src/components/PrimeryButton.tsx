import React from 'react'
import { Link } from 'react-router-dom'

export type buttonProps = {
    styles?: string
    children: React.ReactNode,
    src: string
}

const PrimeryButton = ({ styles, children ,src }: buttonProps) => {
    return (
        <Link
            className={`${styles} flex flex-row-reverse gap-2 py-3 px-4 rounded-md bg-[#005461] text-white hover:bg-[#018790] transition-all duration-200`}
            to={src}>
            
            {children}
            
        </Link >
    )
}

export default PrimeryButton