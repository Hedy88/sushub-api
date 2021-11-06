import {Request, Response, NextFunction} from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import {AnyZodObject} from 'zod'

const validate = (schema: { parse: (arg0: { body: any; query: ParsedQs; params: ParamsDictionary; }) => void; }) => (req: Request, res: Response, next:NextFunction) =>{
 
    try{
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        })
    }catch(e: any){
        return res.status(400).send(e.errors);
    }
}

export default validate