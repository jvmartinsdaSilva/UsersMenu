import styled from "styled-components";


const BtnDefault = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    
    svg{
        width: 25px;
        height: 25px;
        transition: .5;
    }

    svg:hover{
        fill: ${props => props.theme.Contrast};

    }

    @media  (min-width: 420px){
        svg{
            width: 40px;
            height: 40px;
        }
    }
`

export default BtnDefault