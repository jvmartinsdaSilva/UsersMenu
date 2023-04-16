import express from 'express';
import { getUsers, addUsers, deleteUser, editUser } from './controllers/user.js';
import cors from "cors"

const PORT = 3030
const app = express()

app.use(express.json())
app.use(cors())

app.get("/", getUsers)
app.post("/", addUsers)
app.delete("/:id", deleteUser)
app.put("/:id", editUser)

app.listen(PORT, () => console.log(`Servidor rorando em http://localhost:${PORT}`))
