import React, { useEffect } from 'react';
import * as S from './style';
import { MainComponent } from './../../components';
import Calc from './../../utils/icons/calculator.png';
import Calendar from './../../utils/icons/calendar.png';
import Category from './../../utils/icons/category.png';

interface SecondContainerProps {
    isShow: Boolean;
}

const SecondContainer:React.FC<SecondContainerProps> = ({isShow}) => {
    const AosInfo = [
        {delay: 0.2, title: '지출 수입 계산', subText: '수입 지출 계산을 통한 체계적인 돈관리', URL: Calc},
        {delay: 0.4, title: '월별 통계 확인', subText: '월별 통계를 통한 자기반성과 다짐', URL: Calendar},
        {delay: 0.6, title: '카테고리', subText: '카테고리를 통한 내 지출 비율 알아보기', URL: Category}
    ]

    return (
        <>
            <S.SecMain>
                { isShow && 
                    <>
                        <S.Title>
                            Free&nbsp;Service
                        </S.Title>
                        <S.IconPlace>
                            {
                                AosInfo.map(info => (
                                    <MainComponent Delay={info.delay} Title={info.title} SubText={info.subText} URL={info.URL}/>
                                ))
                            }
                        </S.IconPlace>                        
                    </>
                }
            </S.SecMain>
        </>
    )
}

export default SecondContainer;