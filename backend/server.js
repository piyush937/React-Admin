import express, {json} from 'express';
 import { createConnection } from 'mysql';
import cors from 'cors';
import mysql from 'mysql';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "127.0.0.1:3306",
    user: "root",
    password: "",
    database: "signup"
})


 app.post('/signup' , (req , res) => {
    // const sql = "INSERT INTO `login` (`name` , `email` , `password`) VALUES (?)";
    const values = [
        req.body.name[0],
        req.body.email[0],
        req.body.password[0]
    ]
       const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
    
    db.query(sql , [values], (err , data) => {
        if(err){
            return res.json(" error");
        }
        console.log("This is our data",data);
        return res.json(data);
    })
})
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.post('/login' , (req , res) => {
    // const sql = "INSERT INTO `login` (`name` , `email` , `password`) VALUES (?)";
    const sql = "SELECT * FROM login WHERE  `email` = ? AND `password` = ? ";
    
    db.query(sql , [req.body.email[0] , req.body.password[0]], (err , data) => {
        if(err){
            return res.json("error");
        }
        if(data.length > 0) {
            return res.json("Success");
        }
        else{
            return res.json("Fail");
        }
        console.log("This is our data",data);
        return res.json(data);
    })
})
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});


app.listen(8081 , ()=> {
    console.log('listening');
})