import { Request, Response } from "express";
import catalogoData from '../productos.json';

export const getEntries = () => catalogoData;

class IndexController {

    public list (req: Request, res: Response) {
        res.json(getEntries());
        console.log(getEntries());
    }

}

export const indexController = new IndexController();