import {ButtonDelete, ButtonEdit} from "../Buttons/Buttons"

import UserListContainer from "./Style"

const UserList = ({ users, deletUser, editUser }) => {


    return (
        <UserListContainer>
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>SOBRENOME</th>
                    <th>NOTA</th>
                    <th>EDI</th>
                    <th>EXC</th>
                </tr>
            </thead>
            <tbody>
                {users?.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.lastname}</td>
                        <td>{user.nota}</td>
                        <td><ButtonEdit clickEvent={() => editUser(user)}/></td>
                        <td><ButtonDelete clickEvent={() => deletUser(user.id)} userId={user.id}/></td>
                    </tr>
                ))}
            </tbody>

        </UserListContainer>
    )
}

export default UserList