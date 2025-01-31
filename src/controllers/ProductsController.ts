import { Request, Response } from 'express';
import { AppError } from '../utils/appError';

class ProductsController{


    index (req:Request, res: Response) {
    const { page, limit } = req.query

    res.send(`Produtos da página ${page} com limite de ${limit}`)
    }
    create(req:Request, res: Response){
    const { nome, price} = req.body

    if(!nome || !price){
        throw new AppError("Nome e Preço são obrigatório")
    }

    //throw new Error("Erro ao tentar criar um produto")
    //throw new AppError("Erro ao tentar criar um produto")

     res.status(201).json({nome, price, user_id: req.user_id})
    }
}

export { ProductsController }