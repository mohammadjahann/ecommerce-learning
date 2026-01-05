import { useContext, useEffect, useState } from 'react'
import { motion, AnimatePresence} from 'framer-motion'
import PrimeryButton from './PrimeryButton'
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ScreenContext } from '../context/screenContext';
import { RxCross2 } from "react-icons/rx";
import Switch from './Switch';
import { NavLink } from 'react-router-dom';



const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  const [showSideMenu, setShowSideMenu] = useState(false)

  // Get Data from context
  const context = useContext(ScreenContext)
  if (!context) {
    throw new Error('Header must be used within ScreenContextProvider')
  }
  const { setIsDark, screenSize } = context
  ////////////////////////

  // close side Menu when screen size change
  useEffect(() => {

    if (screenSize === 'md' || screenSize === 'lg') {
      setShowSideMenu(false)
    }

  }, [screenSize])
  ///////////////////////////////////////////

  // Disabale User scroll when side menu showing

  useEffect(() => {

    if (showSideMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

  }, [showSideMenu])

  /////////////////////////////////////////////

  //Handle user Scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0

      setIsScrolled(prev => {
        if (prev === scrolled) return prev
        return scrolled
      })
    }

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  /////////////////////

  // navigation menu
  const navigation = (styles?: string) => {
    return (
      <ul className={` ${styles} gap-6 text-white`}>
        <li><NavLink onClick={() => setShowSideMenu(false)} className={isActive} to={'/'}>خانه</NavLink></li>
        <li>دوره های آموزشی</li>
        <li><NavLink onClick={() => setShowSideMenu(false)} className={isActive} to={'/courses'}>همه دوره ها</NavLink></li>
        <li><NavLink onClick={() => setShowSideMenu(false)} className={isActive} to={'/articles'}>مقالات</NavLink></li>
      </ul>
    )
  }
  ////////////////////

  // NavLinks isActive checker 
  const isActive = ({ isActive }: { isActive: boolean }) => {
    return isActive ? 'border-b-2 border-slate-800 dark:border-lime-500' : '';
  };
  ///////////////////////////

  return (
    <>
      <div className='w-full fixed flex-col top-0 left-1/2 bg-primary-color dark:bg-slate-800 -translate-x-1/2 min-h-3 font-MTNIrancell-Medium z-30'>
        <motion.div 
        className=' relative'
        initial={{y:-80,opacity:0.3}}
        animate={{y:0,opacity:1,transition:{duration:1,type:'spring' ,stiffness:100}}}
       >
          <nav
            className=" w-[85%] mx-auto flex justify-between items-center p-2">
            <GiHamburgerMenu className=' block sm:hidden text-2xl cursor-pointer text-white' onClick={() => setShowSideMenu(true)} />

            <div className='hidden md:flex justify-center items-center gap-3 '>
              <PrimeryButton styles='hidden md:flex' src='/login'>
                <FaRegUser />
                عضویت | ورود
              </PrimeryButton>
              <Switch setIsDark={setIsDark} />
            </div>

            {navigation('hidden sm:flex flex-row-reverse')}

            <div className="bg-orange-400 rotate-45 w-10 h-10 p-2 flex items-center justify-center">
              <span className="-rotate-45 block text-3xl font-Oi-Regular text-white">
                لرنی<span className=' text-indigo-700'>تو</span>
              </span>
            </div>


          </nav>
        </motion.div>




        {/* Animated border */}
        <AnimatePresence>
          {isScrolled && (
            <motion.div
              key="border"
              className="absolute bottom-0 left-0 w-full h-[2px] bg-[#005461]"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}

              transition={{ duration: 0.1, ease: 'easeInOut' }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* blur bg when side menu showing */}
      {showSideMenu && <div
        onClick={() => setShowSideMenu(false)}
        className={`fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity duration-500 ${showSideMenu ? 'pointer-events-auto opacity-100 backdrop-blur-sm' : 'pointer-events-none opacity-0'}`}></div>}

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 bottom-0 text-center w-64 border-r-[1px] border-white bg-primary-color/80 dark:bg-slate-800/80 p-4 flex flex-col items-center gap-6 z-50 transform ${showSideMenu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`} >
        <RxCross2 className=' text-2xl text-white cursor-pointer' onClick={() => setShowSideMenu(false)} />
        {navigation('flex flex-col')}
        <PrimeryButton src='/'>
          <FaRegUser />
          عضویت | ورود
        </PrimeryButton>
        <Switch setIsDark={setIsDark} />
      </div>
    </>
  )
}

export default Header
