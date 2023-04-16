import axios from "axios"
import { useEffect, useState } from "react";

import Register from "./components/Register/Register";
import UserList from "./components/UsersList/UserList";
import Message from "./components/Message/Message";

import GlobalStyle from "./globals/Style";

function App() {
  const [users, setUsers] = useState([]);
  const [systemMessage, setSystemMessage] = useState();

  const createMessage = (message, type) => {
      setSystemMessage({
        message,
        type
      })

      setTimeout(() => {
        setSystemMessage("")
      }, 2000)
  }


  const getUsers = async () => {
    try {
      const usersInfo = await axios.get("http://localhost:3030")
      setUsers(usersInfo.data)
    } catch (err) {
      console.log("ERRO: " + err)
    }
  }


  const addUsers = async ({ name, lastname, nota }) => {
    try {
      await axios.post("http://localhost:3030", {
        name,
        lastname,
        nota
      })
      getUsers()
      createMessage("Usuario criado com sucesso", "success")
    } catch (err) {
        console.log("ERRO: " + err)
      createMessage("Desculpe não conseguimos criar um novo usuario", "error")

    }

  }

  const deletUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/${id}`)
      getUsers()
      createMessage("Usuario removido com sucesso", "success")
    } catch (err) {
      console.log("ERRO " + err)
    }
  }

  useEffect(() => getUsers, [])


  return (
    <>
      <GlobalStyle />
      <Register createUser={addUsers} />
      {systemMessage && <Message message={systemMessage.message} type={systemMessage.type} />}
      <UserList users={users} deletUser={deletUser} />
    </>
  );
}

export default App;