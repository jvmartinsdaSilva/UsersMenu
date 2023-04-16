import styled from "styled-components";

const UserListContainer = styled.table`
    width: 90%;
    margin: 1em auto;
    border: 0;

    th{
        font-weight: normal;
        font-size: 16px;
        color: ${props => props.theme.Contrast};
        height: 50px;
    }

    tbody{
        margin: 2em 0;
    }
    td{
        color: ${props => props.theme.TextColor};
        text-align: center;
    }

    button{
        background: none;
        //border: none;
    }
    
    @media (min-width: 420px){
        th{
            font-size: 20px;
            font-weight: bold;
        }

        td{
            font-size: 18px;
        }


    }

`

export default UserListContainer