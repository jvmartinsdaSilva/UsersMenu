import styled from "styled-components";

const LoadingComponent = styled.div`


        display: flex;
        margin: 2em auto;
        width: 75px;
        height: 75px;
        background: ${props => props.theme.Contrast};
        clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
        animation: spiner 3s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
        
        div{
            background: white;
            width: 50%;
            height: 50%;
            margin: 25% auto;
            transform: scale(1.5);
            clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);

        }
        
    
    @keyframes spiner {
        100%{
            rotate: 360deg;

        }
    }


`

export default LoadingComponent