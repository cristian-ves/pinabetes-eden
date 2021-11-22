import {  useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";

export const useToggleHamburguer = () => {

    const [isOpen, setIsOpen] = useState(true)
    const navBarList = useRef();
    const selector = gsap.utils.selector(navBarList);
    
    const timeLine = useRef();

    useEffect(() => {
        
        timeLine.current = gsap.timeline()
            .to(navBarList.current, {
                height: 'auto',
                duration: 0.5
            })
            .to(selector('.navBar__item'),{
                visibility: 'visible',
                opacity: 1,
                duration: 0.5
            })
    }, []);
    
    useEffect(() => {
        timeLine.current.reversed( isOpen );
    }, [isOpen])

    const toggleNavBarList = () => setIsOpen( !isOpen );


    return {toggleNavBarList, navBarList}
}
