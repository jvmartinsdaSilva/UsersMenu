import MessageContainer from "./Style";


const Message = ({message, type}) => {
    return(
        <MessageContainer>
            <h2 className={type}>{message}</h2>
        </MessageContainer>
    )
}

export default Message