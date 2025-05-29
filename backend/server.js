// server.js
import express from 'express';
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT || 5000;
const Name = process.env.NAME || "john";

app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});

app.get("/users",(req,res)=>{
  res.json({
    user : "Gopal kumar",
    info : "User is fetched successfully"
  })
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
