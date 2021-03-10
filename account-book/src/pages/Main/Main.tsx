import React, {useState, useEffect} from 'react';
import * as S from './style';
import { FirstContainer, SecondContainer, Footer } from './../../containers';
import Calc from './calculator.png';

function Main() {
    const [scroll, handleScroll] = useState(0);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        window.addEventListener("scroll", isScroll)

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("scroll", isScroll);
        }
    }, [isShow]);

    const onScroll = () => {
        handleScroll(document.documentElement.scrollTop);
    }
    
    const isScroll = () => {
        const height = window.scrollY;

        if(height >= 100) {
            setIsShow(true);
        } else if(height <= 0) {
            setIsShow(false);
        }
    }   
    return(
        <S.MainPlace onScroll={isScroll}>    
            <FirstContainer />
            <SecondContainer isShow={isShow} />
            <Footer />
        </S.MainPlace>
    )
}



export default Main;