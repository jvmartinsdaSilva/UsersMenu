import { useState } from "react"
import RegisterContainer from "./Style"

const Register = ({ createUser }) => {
    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [nota, setNota] = useState('')

    const getUserInfos = (e) => {
        e.preventDefault()

        const infos = {
            name,
            lastname,
            nota
        }
        createUser(infos)
        clearFields()
    }

    const clearFields = () => {
        setName("")
        setLastName("")
        setNota("")
    }

    return (
        <RegisterContainer onSubmit={getUserInfos}>
            <h2>Novo usuario</h2>

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

            <button>CADASTRAR</button>
        </RegisterContainer>
    )
}

export default Register