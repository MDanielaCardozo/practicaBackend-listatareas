import {Router} from 'express';

const router = Router();

router
.route('/')
.get((req, res)=>{
    res.send('primera peticion get')
})    

export default router;

//app.get('/', (req, res)=>{
//    res.send('primera peticion get')
//})

//app.get('/prueba', (req, res)=>{
 //   res.send('segunda peticion get')
//})