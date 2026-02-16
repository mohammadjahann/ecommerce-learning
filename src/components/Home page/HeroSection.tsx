import  { useEffect } from 'react'
import HomeButton from './HomeButton'
import FloatingCard from './FloatingCard'
import { FaCalendarAlt, FaBookReader } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";

const HeroSection = () => {

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/neysidev/bbd40032f0f4e167a1e6a8b3e99a490c/raw/fc7dc242f41393845d90edaa99e32e28f1ddfe24/train-stations.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
    }, [])

    return (
        <>
            {/* HERO SECTION */}
            <section className="relative hero-grid h-[200vh] md:h-screen bg-primary-color text-white overflow-hidden mt-3 font-MTNIrancell-DemiBold">


                <div className='hero-text flex justify-center items-center flex-col gap-4 text-[10px] esm:text-[14px] msm:text-[20px] lg:text-2xl'>
                    <h1><span className='text-[40px] font-MTNIrancell-Bold text-[#f48c06]'>مطالعه</span> آنلاین آسان تر از همیشه</h1>
                    <p>لرنیتو یک پلتفرم آموزشی برای تمام نیاز های شما</p>
                    <p>با راه های نوین خود را آموزش دهید</p>
                    <div className='flex  gap-2 flex-col w-full justify-center items-center md:flex-row '>
                        <HomeButton src='/login'>
                            عضویت رایگان
                        </HomeButton>
                        <HomeButton src='/login'>
                            تماشای معرفی سایت
                        </HomeButton>

                    </div>


                </div>

                <div className='hero-img flex justify-center items-center'>
                    <img src='./img/student.png' className='w-full h-full sm:h-[110vh] md:h-full object-cover' />
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





            </section >

        </>
    )
}

export default HeroSection

{/* <img src='./img/student.png' className=' hero-img w-[600px] md:w-[400px] lg:w-[500px]' /> */ }


//  <div className='hero-text  w-full  md:h-0 text-right flex flex-col justify-center items-center md:items-end  gap-4 text-[10px] esm:text-[14px] msm:text-[20px] lg:text-2xl   '>
// <h1><span className='text-xl font-MTNIrancell-Bold text-[#f48c06]'>مطالعه</span> آنلاین آسان تر از همیشه</h1>
// <p>لرنیتو یک پلتفرم آموزشی برای تمام نیاز های شما</p>
// <p>با راه های نوین خود را آموزش دهید</p>
// <div className='flex  gap-2 flex-col w-full justify-center items-center md:flex-row md:items-end md:justify-end '>
//     <HomeButton src='/login'>
//         عضویت رایگان
//     </HomeButton>
//     <HomeButton src='/login'>
//         تماشای معرفی سایت
//     </HomeButton>

// </div>
//                     </div>



{/* <FloatingCard style=' bottom-[35%] left-[10%] msm:left-[60%] md:left-[10%] md:bottom-[60%]' duration={10} transform={[
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
                    </FloatingCard> */}