import styled from '@emotion/styled';

export const MainPlace = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    width: 100%;
    height: auto;
`;
export const MainPageImg = styled.img`
    width:100%;
    height: 730px;
    animation: fadein 2s;
    
    @keyframes fadein {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const TextPlace = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 130px;

    font-size: 55px;
    color: #1a050b;

    animation: fadein 3s;
    
    @keyframes fadein {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const SubText = styled.div`
    margin-top: 20px;
    font-size: 35px;
`;
export const StartBtn = styled.button`
    display: flex;
    width: 170px;
    height: 60px;

    border: none;
    border-radius: 30px;
    outline: none;
    
    background-color: #ff2b59;
    margin-top: 80px;

    font-size: 28px;
    font-family: 'THE유럽여행';
    src: url(./fonts/THE유럽여행.ttf) format('truetype');

    padding-left: 15px;
    padding-top: 11px;
    color: white;

    transition: 0.3s;

    &:hover {
        cursor: pointer;
        transform: scale(1.04);
    }
`;
export const SecMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 550px;

    background-color: #f9f9f9;
`;
export const Title = styled.text`
    text-align: center;

    font-size: 40px;
    margin-top: 60px;

    animation: slide-in-Right 1s;

    @keyframes slide-in-Right {
        0% { opacity: 0; transform: translateX(90px)}
        100% { opacity: 1; }
    }
`;

export const IconPlace = styled.div`
    display: flex;
    justify-content: center;
    
    width: 80%;
    margin: 5% 5%;
`;

export const FooterPlace = styled.div`
    display: flex;

    width: 100%;
    height: 230px;

    background-color: #cccccc;
`;

export const FooterLeft = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 50%;
`;

export const FooterRight = styled.div`
    display: flex;
    width: 50%;
`;
