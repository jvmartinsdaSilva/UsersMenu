import { json } from "express"
import { db } from "../db.js"

export const getUsers = (req, res) => {
    const getAll = "SELECT * FROM users"

    db.query(getAll, (err, data) => {
        if (err) return res.json("ERRO: " + err)

        return res.status(200).json(data)
    })
}

export const addUsers = (req, res) => {
    const add = "INSERT INTO users ( `name`, `lastname`, `nota` ) VALUES(?)"

    const values = [
        req.body.name,
        req.body.lastname,
        req.body.nota
    ]

    db.query(add, [values], (err) => {
        if(err) return console.log("ERRO: " + err)

        return res.status(201).json("Usuario criado com sucesso")
    })

}

export const deleteUser = (req, res) => {
    const delet  =  "DELETE FROM users WHERE `id` = ?"

    db.query(delet, [req.params.id], (err) => {
        if(err) return res.json("Erro ao deletar")

        return res.json("Usuario removido com sucesso")
    })
}