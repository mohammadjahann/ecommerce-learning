import React, { type ReactNode } from 'react'

type cardProps = {
    icon: ReactNode,
    title: string,
    text: string,

}

const ServiceCard = ({ icon, title, text }: cardProps) => {
    return (
        <div
            className=' relative bg-white flex flex-col w-full sm:w-[45%] md:w-[30%] h-[330px] p-4 mt-10 justify-center items-center shadow-2xl rounded-2xl dark:bg-gray-700'>
            <div
                className=' absolute -top-8 lg:-top-14 left-[38%] bg-blue-500 rounded-full w-[60px] lg:w-[100px] h-[60px] lg:h-[100px] text-white flex justify-center items-center text-[34px]'>
                {icon}
            </div>
            <h5 
            className=' font-MTNIrancell-Bold text-[15px] lg:text-[22px] text-center'>
                {title}
            </h5>
            <p
            className=' font-semibold text-center text-[15px] lg:text-[18px]'>
                {text}
            </p>
        </div>
    )
}

export default ServiceCard