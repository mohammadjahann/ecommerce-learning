
import { Link } from 'react-router-dom'
import type { buttonProps } from '../PrimeryButton'

const HomeButton = ({ children, src, styles }: buttonProps) => {
    return (
        <Link to={src}
            className={`${styles} w-[80%] flex items-center justify-center sm:w-auto px-6 py-3 rounded-2xl bg-white/20 dark:bg-black/30 backdrop-blur-md border border-white/30 text-white font-medium shadow-lg hover:bg-white/30 hover:border-white/40 transition-all duration-300 active:scale-95`}>
            {children}
        </Link>

    )
}

export default HomeButton