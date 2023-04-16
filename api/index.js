import express from 'express';
import { getUsers, addUsers, deleteUser } from './controllers/user.js';
import cors from "cors"

const PORT = 3030
const app = express()

app.use(express.json())
app.use(cors())

app.get("/", getUsers)
app.post("/", addUsers)
app.delete("/:id", deleteUser)

app.listen(PORT, () => console.log(`Servidor rorando em http://localhost:${PORT}`))
