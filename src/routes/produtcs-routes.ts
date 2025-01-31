import { Router } from "express";
import { myMiddleware } from "../middleware/my-middleware";


const productsRoutes = Router()


productsRoutes.get("/", (req, res) => {
    const { page, limit } = req.query

    res.send(`Produtos da página ${page} com limite de ${limit}`)
   
})

// midleware local em uma rota especifica
productsRoutes.post("/", myMiddleware, (req, res) => {
    const { nome, price} = req.body
    
     //res.send(`Produtos ${nome} custa $ ${price}`)
     res.status(201).json({nome, price, user_id: req.user_id})
 })

 export { productsRoutes }