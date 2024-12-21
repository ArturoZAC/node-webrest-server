import { Router } from "express";
import { TodoRoutes } from "./todos/route";

export class AppRoutes {

  static get routes(): Router {
    const router = Router();

    router.use('/api/todos', TodoRoutes.routes );

    return router;
  }
  
}