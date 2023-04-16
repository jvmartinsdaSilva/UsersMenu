import styled from "styled-components";

const MessageContainer = styled.div`
    width: 90%;
    margin: 1em auto;
    padding: .5em 0;
    background: ${props => props.theme.background};
    text-align: center;
    font-size: 20px;
    border-radius: 10px;

    h2.success{
        color: ${props => props.theme.success}
    }
    h2.error{
        color: ${props => props.theme.error}
    }

`

export default MessageContainer