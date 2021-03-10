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
    position: absolute;
    width: 17rem;
    height: auto;
    padding: 15px 0;
    right: 0;

    background-color: red;
    border-radius: 5px;
    transform: translateY(20px);
`;