import { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const ScrollButton = () => {
    const [toTopButton, setToTopButton] = useState(false)

    const handleVisiblyButton = () => {
        if (window.scrollY > 100) {
            setToTopButton(true)
        } else {
            setToTopButton(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleVisiblyButton)
        return () => {
            window.removeEventListener('scroll', handleVisiblyButton)
        }
    }, [])
    const top = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>
            {toTopButton && (
                <button className="scroll-btn" type="button" onClick={top}>
                    <ArrowUpwardIcon fontSize={'large'} />
                </button>
            )}
        </>
    )
}

export default ScrollButton
