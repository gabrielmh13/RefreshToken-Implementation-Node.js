import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

export class ListUsersController {
    async handle(req: Request, res: Response){
        const listUsersUseCase = new ListUsersUseCase()
        const users = await listUsersUseCase.execute()

        return res.json({users})
    }
}