import { Router, Request, Response } from 'express';
import { multerConfig } from './config/multer'
import * as multer from 'multer'

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Code83' })
})

routes.post('/upload', multer(multerConfig).single('file'), (request: Request, response: Response) => {
    
    console.log(request.file)
    
    return response.json({ message: 'Xlsx enviada' })
})

export default routes;