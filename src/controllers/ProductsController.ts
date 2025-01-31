import { Request, Response } from 'express';


class ProductsController{


    index (req:Request, res: Response) {
    const { page, limit } = req.query

    res.send(`Produtos da página ${page} com limite de ${limit}`)
    }
    create(req:Request, res: Response){
    const { nome, price} = req.body

    throw new Error("Erro genérico")
    
     res.status(201).json({nome, price, user_id: req.user_id})
    }
}

export { ProductsController }