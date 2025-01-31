import { Router } from "express";

import { productsRoutes } from "./produtcs-routes";


const routes = Router()

routes.use("/products",productsRoutes)

export { routes }