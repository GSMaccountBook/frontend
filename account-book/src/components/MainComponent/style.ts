import styled from '@emotion/styled';

export const FirstLoadPlace = styled.div`
    display: flex;
    justify-content: center;

    border: 0px !important;

    width: 33.33%;

    border-left: 1px solid #dedede;
`;
export const ExplainPlace = styled.div`
    display: flex;
    justify-content: center;

    width: 50%;
    
    text-align: center;
    padding-top: 10px;
    color: #919191;
    font-size: 18px;
`;

export const ReverseLoad = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    animation: reverse-in 1s;
    animation-delay: 0.3s;
    opacity: 0;
    animation-fill-mode: forwards;

    @keyframes reverse-in {
        0% { opacity: 0; transform: perspective(2500px) rotateY(100deg) };
        100% { opacity: 1; }
    }
`;