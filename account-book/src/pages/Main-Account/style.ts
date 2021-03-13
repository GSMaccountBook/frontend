import styled from '@emotion/styled';

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 55px;

    background-color: #448aff;
`;
export const ProfilePlace = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13%;
    margin-right: 40px;
    
    &:hover {
        cursor: pointer;
    }
`;

export const Hover = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

export const ToggleMenu = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 17rem;
    height: 0px;
    right: 0;
    margin: 80px 20px;

    background-color: red;
    border-radius: 5px;

    transition: height 3s;
`;

export const MenuItems = styled.li`
    width: 80%;
    font-size: 19px;
    padding: 10px;
    list-style: none;
`;