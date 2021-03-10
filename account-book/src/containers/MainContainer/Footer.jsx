import React from 'react';
import * as S from './style.ts';

const Footer = () => {
    return(
        <S.FooterPlace>
            <S.FooterLeft>
                <div style={{fontSize: '40px', padding: '20px', color: 'white'}}>Contect Me</div>
                <div style={{fontSize: '18px', padding: '10px 20px'}}>email : answoals13@gmail.com</div>
                <div style={{fontSize: '18px', padding: '10px 20px'}}>TEL: 010-2501-5714</div>
                <div style={{fontSize: '15px', padding: '10px 20px', color: 'gray'}}>@2021 GSM All Rights Reserved</div>
            </S.FooterLeft>
            <S.FooterRight>

            </S.FooterRight>
        </S.FooterPlace>
    )
}

export default Footer;  