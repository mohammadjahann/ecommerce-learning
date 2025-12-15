
import React, { createContext, useEffect, useState, type ReactNode, type SetStateAction } from "react";

type ScreenSize = 'esm' | 'md' | 'lg'

type contextTypes = {
    screenSize: ScreenSize | undefined
    isDark: boolean
    setIsDark: React.Dispatch<SetStateAction<boolean>>
}

const ScreenContext = createContext<contextTypes | undefined>(undefined)

const ScreenContextProvider = ({ children }: { children: ReactNode }) => {

    const [screenSize, setScreenSize] = useState<ScreenSize | undefined>()
    const [isDark, setIsDark] = useState<boolean>(false)

    useEffect(() => {

        const resizeHandler = () => {
            if (window.innerWidth < 328) {
                setScreenSize(prev => prev === 'esm' ? prev : 'esm')
            } else if (window.innerWidth < 768) {
                setScreenSize(prev => prev === 'md' ? prev : 'md')
            } else {
                setScreenSize(prev => prev === 'lg' ? prev : 'lg')
            }

        }

        resizeHandler()

        window.addEventListener('resize', resizeHandler)

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [])

    useEffect(() => {
        const root = document.documentElement

        if (isDark) {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [isDark])



    return (
        <ScreenContext.Provider value={{ screenSize, isDark, setIsDark }}>
            {children}
        </ScreenContext.Provider>
    )
}

export { ScreenContext }

export default ScreenContextProvider