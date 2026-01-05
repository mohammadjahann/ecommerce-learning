import React, { useEffect, useRef, useState } from 'react'
import CountUp from './CountUp'



type titleTypes = {
  number: number
  text: string
}

const titles: titleTypes[] = [
  { number: 5, text: 'سال تجربه' },
  { number: 13, text: 'اساتید مجرب' },
  { number: 75, text: 'درصد موفقیت' },
  { number: 1000, text: 'دانشجو' },
]

const ResumeSction = () => {
  const sectionRef = useRef<HTMLUListElement | null>(null)
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true)
          observer.disconnect() 
          console.log(entry);
          
        }
        
      },
      { threshold: 0.4 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      
      className='w-[85%] mx-auto bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-200 font-MTNIrancell-DemiBold flex flex-col items-center justify-center gap-3 mt-10'
    >
      <h3 className='font-MTNIrancell-Bold text-2xl msm:text-4xl lg:text-5xl'>
        سابقه کاری ما
      </h3>

      <p className='w-[90%] text-center text-[12px] esm:text-[16px] md:w-[70%] lg:w-[50%] lg:text-[20px]'>
        مجموعه لرنیتو تلاش نموده است که با بهترین اساتید و مجرب ترین مشاور،
        کادر آموزش خود رو تکمیل کند تا دانشجو ها بهترین نتیجه ممکن را بگیرند
      </p>

      <ul className='flex items-center justify-around w-full flex-wrap gap-4' ref={sectionRef}>
        {titles.map((item, index) => (
          <li
            key={index}
            className='title-gradient flex flex-col text-center gap-2'
          >
            <span className='font-sans text-[20px] esm:text-[30px] sm:text-[40px] lg:text-[50px]'>
              +
              <CountUp
                end={item.number}
                startCounting={startCount}
                duration={1200}
              />
            </span>

            <span className='text-[10px] esm:text-[18px] sm:text-[35px] lg:text-[40px]'>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResumeSction
