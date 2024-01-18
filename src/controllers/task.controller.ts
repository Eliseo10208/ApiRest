
import { Response,Request } from "express"

import { taskService } from "../services";


export const taskController ={
    getAllTask:async (req:Request,
        res:Response)=>{
        try {
             const data = await taskService.getAll();
            return res.json(data);
        } catch (error:any) {
            res.status(400).json({
                message: error.mesagge
            })
        }
    },
    create:async (req:Request,
        res:Response)=>{
        try {
             const data = await taskService.create(req.body);
            return res.json(data);
        } catch (error:any) {
            res.status(400).json({
                message: error.mesagge
            })
        }
    },
    update:async (req:Request,
        res:Response)=>{
        try {
             const {id} = req.params;
             const data = await taskService.update(id, req.body);
            return res.json(data);
        } catch (error:any) {
            res.status(400).json({
                message: error.mesagge
            })
        }
    },
    delete:async (req:Request,
        res:Response)=>{
        try {
             const {id} = req.params;
             const data = await taskService.delete(id);
            return res.json(data);
        } catch (error:any) {
            res.status(400).json({
                message: error.mesagge
            })
        }
    }
}

