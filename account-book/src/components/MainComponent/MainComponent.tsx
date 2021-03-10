import React from 'react';
import * as S from './style';

interface MainComponentProps {
    Delay: number;
    Title: string;
    SubText: string;
    URL: string;
}

const MainComponent:React.FC<MainComponentProps> = ({Delay, Title, SubText, URL}) => {
    
    return(                             
        <S.FirstLoadPlace>
            <S.ReverseLoad style={{animationDelay: `${Delay}s`}}>
                <img src={URL} alt="Icon" />
                <div style={{fontSize: '28px', paddingTop: '10px', fontStyle: 'bold'}}>{Title}</div>
                <S.ExplainPlace>{SubText}</S.ExplainPlace>
            </S.ReverseLoad>              
        </S.FirstLoadPlace>
    )
}

export default MainComponent;