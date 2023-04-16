import UserListContainer from "./Style"

const UserList = ({ users, deletUser }) => {

    const removeUser = (userID) => {
        deletUser(userID)
    }

    return (
        <UserListContainer>
            {users?.map(user => (
                <li key={user.id}>
                    <h2>{user.name}</h2>
                    <h2>{user.lastname}</h2>
                    <p>{user.nota}</p>
                    <button>Edit</button>
                    <button onClick={() => removeUser(user.id)}>Exc</button>
                </li>
            ))}

        </UserListContainer>
    )
}

export default UserList