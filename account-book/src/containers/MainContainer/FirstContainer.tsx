import React from 'react';
import MainImage from './MainImage.png';
import * as S from './style';
import { Link } from 'react-router-dom';

function FirstContainer() {
    return(
        <>
        <S.MainPageImg src={MainImage}/>
            <S.TextPlace>
                돈관리가 힘드신가요?
                <S.SubText>
                    나만의 가계부를 통해 지출, 수입을 한 눈에<br/>
                    알아보고 돈을 체계적으로 관리할 수 있어요!
                </S.SubText>
                <S.StartBtn>
                    <Link to="/Main-Account" style={{textDecoration: 'none', color: 'white'}}>지금 시작하기</Link>                   
                </S.StartBtn>
            </S.TextPlace>
        </>
    )
}

export default FirstContainer;