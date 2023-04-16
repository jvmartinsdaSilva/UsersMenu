import styled from "styled-components";

const RegisterContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    padding: .5em;
    margin: 1em auto;
    background: ${props => props.theme.background};
    border-radius: 10px;
    
    
    h2,h3{
        margin: .5em;
        color: ${(props) => props.theme.Contrast};
        font-weight: bolder;
    }

    h2{
        text-align: center;
        font-size: 22px;
    }

    h3{
        font-size: 20px;
    }

    
    label{
        width: 100%;
        margin: .5em;
        cursor: pointer;
    }

    input{
        margin: 0 .5em;
        width: 95%;
        height: 35px;
        border: none;
        font-size: 18px;
        padding: .2em;
        color: ${props => props.theme.TextColor}
    }

    button{
        margin: .5em;
        width: 95%;
        height: 35px;
        background: ${props => props.theme.Contrast};
        color: ${props => props.theme.TextWhite};
        font-size: 20px;
        border: none;
        transition: .5s;
        cursor: pointer;
    }
    
    button:hover{
        background: ${props => props.theme.ContrastLight};

    }

`

export default RegisterContainer