import { useState } from 'react'
export default function useScroll(instance) {
    const [y, setY] = useState(0)

    const handelScroll = () => {
        setY(document.documentElement.scrollTop) 
        console.log(y); //   
    }
    window.addEventListener('scroll', handelScroll)


    return [y]
}

