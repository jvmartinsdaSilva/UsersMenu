import { useEffect, useState } from "react"
import RegisterContainer from "./Style"

const Register = ({ createUser, editUser, edit, userEdit }) => {
    const [name, setName] = useState(edit ? userEdit.name : "")
    const [lastname, setLastName] = useState('')
    const [nota, setNota] = useState('')

    const getUserInfos = (e) => {
        e.preventDefault()

        if(edit){
            const infos = {
                name,
                lastname,
                nota,
                id: userEdit.id
            }
            editUser(infos)
        } else {
            const infos = {
                name,
                lastname,
                nota
            }
            createUser(infos)
        }
     
        clearFields()
    }

    const clearFields = () => {
        setName("")
        setLastName("")
        setNota("")
    }

    useEffect(() => {
        const setUserInfos = () => {
            setName(userEdit.name)
            setLastName(userEdit.lastname)
            setNota(userEdit.nota)
        }
        edit && setUserInfos()
    }, [edit, userEdit])

    return (
        <RegisterContainer onSubmit={getUserInfos}>
            <h2>{edit ? `Editando usuario:${userEdit.name} ${userEdit.lastname}` : "Novo usuario"}</h2>
            <label htmlFor="userName">
                <h3>Primeiro nome:</h3>
                <input
                    type="text" id="userName"
                    placeholder="Digite o primeiro nome do usuario"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required />
            </label>

            <label htmlFor="lastName">
                <h3>Ultimo nome:</h3>
                <input
                    type="text"
                    id="lastName"
                    placeholder="Digite o ultimo nome do usuario"
                    onChange={e => setLastName(e.target.value)}
                    value={lastname}
                    required />
            </label>

            <label htmlFor="userNota">
                <h3>Nota:</h3>
                <input
                    type="number"
                    id="userNota" placeholder="Digite a nota do usuario"
                    onChange={e => setNota(e.target.value)}
                    value={nota}
                    required />
            </label>

            <button>{edit ? "Confirmar Edição" : "Cadastrar"}</button>
        </RegisterContainer>
    )
}

export default Register