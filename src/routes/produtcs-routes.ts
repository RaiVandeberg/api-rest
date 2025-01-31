import { Router } from "express";
import { myMiddleware } from "../middleware/my-middleware";
import { ProductsController } from "../controllers/ProductsController";

const productsController = new ProductsController()

const productsRoutes = Router()


productsRoutes.get("/", productsController.index)

// midleware local em uma rota especifica
productsRoutes.post("/", myMiddleware, (productsController.create))

 export { productsRoutes }