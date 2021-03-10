import React, {useState} from 'react';
import * as S from './style';
import { FiMenu, FiChevronDown } from "react-icons/fi";
import ProfileImg from './../../utils/images/profileImg.jpg';

const Header = () => {
    const [Toggle, setToggle] = useState(false);

    return(
        <S.Header>
            <S.Hover>
                <FiMenu style={{color: 'white', width: '45px', height: '25px', padding: '10px'}} />
            </S.Hover>
            <S.ProfilePlace onClick={() => setToggle(!Toggle)}>
                <img src={ProfileImg} style={{borderRadius: '70%',height:'42px', width: '42px'}} alt="img"/>
                <div style={{fontSize: '20px', color: 'white', paddingLeft: '10px'}}>Jonas blue</div>
                <FiChevronDown style={{color: 'white', padding: '15px 13px'}} />
            </S.ProfilePlace>
            { Toggle && 
                <S.ToggleMenu>

                </S.ToggleMenu>
            }
            
        </S.Header>
    )
}

export default Header;