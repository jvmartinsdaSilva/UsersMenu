import styled from "styled-components";

const UserListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 1em auto;
    list-style-type: none;

    li{
        display: flex;
        margin: 1em 0;
        padding: .5em;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        background: ${props => props.theme.background};
        
    }

    li h2{
        width: 20%;
        margin: 0 .5em;
        color: ${props => props.theme.Contrast};
        
    }

    li p{
        font-size: 18px;
        color: ${props => props.theme.TextColor}
    }


    @media  (max-width: 650px){
        li{
            font-size: 14px;
        }
        
    }
    

`

export default UserListContainer