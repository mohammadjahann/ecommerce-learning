import React from 'react'
import HomeButton from './HomeButton'
import FloatingCard from './FloatingCard'
import { FaCalendarAlt, FaBookReader } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";

const HeroSection = () => {
    return (
        <>
            {/* HERO SECTION */}
            <section className="relative min-h-screen bg-primary-color text-white overflow-hidden mt-3 font-MTNIrancell-DemiBold">

                <div className="relative z-10 max-w-7xl flex flex-row-reverse mx-auto px-6 pt-5 md:pt-28 pb-60">
                    <div className='h-[90vh] w-full md:h-0 text-right flex flex-col justify-center items-center md:items-end mb-32 md:mr-20 md:mt-36 md:mb-0 gap-4 text-[10px] esm:text-[14px] msm:text-[20px] lg:text-2xl   '>
                        <h1><span className='text-xl font-MTNIrancell-Bold text-[#f48c06]'>مطالعه</span> آنلاین آسان تر از همیشه</h1>
                        <p>لرنیتو یک پلتفرم آموزشی برای تمام نیاز های شما</p>
                        <p>با راه های نوین خود را آموزش دهید</p>
                        <div className='flex  gap-2 flex-col w-full justify-center items-center md:flex-row md:items-end md:justify-end '>
                            <HomeButton src='/login'>
                                عضویت رایگان
                            </HomeButton>
                            <HomeButton src='/login'>
                                تماشای معرفی سایت
                            </HomeButton>

                        </div>
                    </div>

                    <FloatingCard style=' bottom-[35%] left-[10%] msm:left-[60%] md:left-[10%] md:bottom-[60%]' duration={10} transform={[
                        'translateX(-10px)',
                        'translateX(0px)',
                        'translateX(10px)',
                        'translateX(0px)',
                        'translateX(-10px)']}>
                        مشاوره کنکور
                        <PiStudentFill />
                    </FloatingCard>
                    <FloatingCard style=' bottom-[15%] left-[40%] msm:left-[64%] md:hidden lg:flex lg:bottom-[15%] lg:left-[40%]' duration={15} transform={[
                        'translateX(-20px)',
                        'translateX(0px)',
                        'translateX(20px)',
                        'translateX(0px)',
                        'translateX(-20px)']}>
                        آزمون آنلاین
                        <FaBookReader />
                    </FloatingCard>
                    <FloatingCard style=' bottom-[8%] left-[20%] md:bottom-[3%] md:bottom-[-10%]' duration={20} transform={[
                        'translateY(-5px) translateX(-20px)',
                        'translateY(-20px) translateX(0px)',
                        'translateY(-10px) translateX(20px)',
                        'translateY(-20px) translateX(0px)',
                        'translateY(-5px) translateX(-20px)']}>
                        زمان بندی
                        <FaCalendarAlt />
                    </FloatingCard>
                    <img src='./img/student.png' className='absolute left-0 top-[75%] esm:top-[65%] msm:top-[60%] msm:w-[400px] md:top-[50%]  md:-left-[10%] md:w-[500px] lg:left-0 lg:top-[40%] lg:w-[600px] z-0' />
                </div>


                <div className="custom-shape-divider-bottom-1765819244 z-20">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                            className="fill-gray-200 dark:fill-slate-900 transition-colors duration-300"
                        />
                    </svg>
                </div>

            </section >

        </>
    )
}

export default HeroSection