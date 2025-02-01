import { Request, Response } from 'express';
import { AppError } from '../utils/appError';
import { z } from "zod"

class ProductsController{


    index (req:Request, res: Response) {
    const { page, limit } = req.query

    res.send(`Produtos da página ${page} com limite de ${limit}`)
    }
    create(req:Request, res: Response){
  
    const bodySchema = z.object({
        nome: z.string(),
        price: z.number(),
    })

    const {nome, price} = bodySchema.parse(req.body)
/*
    if(!nome){
        throw new AppError("Nome é obrigatório")
    }

    if(nome.trim().length < 6){
        throw new AppError("Nome deve ter no mínimo 6 caracteres")
    }

    if(price < 0){
        throw new AppError("Preço deve ser maior que zero")
    }

    if(!price){
        throw new AppError("Preço é obrigatório")
    }*/


    //throw new Error("Erro ao tentar criar um produto")
    //throw new AppError("Erro ao tentar criar um produto")

     res.status(201).json({nome, price, user_id: req.user_id})
    }
}

export { ProductsController }