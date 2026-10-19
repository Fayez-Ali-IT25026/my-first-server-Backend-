import express from 'express';
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 5000 ;


app.use(cors());
app.use(express.json());


const user = [
  {
    id: 1,
    name: "Rahim Ahmed",
    email: "rahim@example.com"
  },
  {
    id: 2,
    name: "Karim Hasan",
    email: "karim@example.com"
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    email: "nusrat@example.com"
  },
  {
    id: 4,
    name: "Sadia Islam",
    email: "sadia@example.com"
  },
  {
    id: 5,
    name: "Fahim Hossain",
    email: "fahim@example.com"
  }
];



// app.get('/users',(req,res)=>{
//     res.send('yo bro');
//  });
app.get('/users',(req,res)=>{
    res.send(user);
 });





 app.post('/users',(req,res)=>{
  

    console.log('well done', req.body)
    // res.send('WELL DONE')
     res.send({success:true , message : 'user added'})
 })


 
app.listen(PORT,()=>{

    // console.log('server running on PORT ${PORT}')
    console.log(`server running on PORT ${PORT}`)
    
});