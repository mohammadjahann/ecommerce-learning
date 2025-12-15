import React from 'react'

type buttonProps = {
    styles?: string
    children: React.ReactNode
}

const PrimeryButton = ({ styles, children }: buttonProps) => {
    return (
        <button className={`${styles} flex flex-row-reverse gap-2 py-3 px-4 rounded-md bg-[#005461] text-white hover:bg-[#018790] transition-all duration-200`}>
            {children}
        </button>
    )
}

export default PrimeryButton