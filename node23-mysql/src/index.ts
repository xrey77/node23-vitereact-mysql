//TYPEORM
import "reflect-metadata"; 
import { AppDataSource } from "./data-source";
import express from 'express';
import router from './router';
import 'dotenv/config'; 
import cors from 'cors';

// import path from "path";
// import fs from 'fs';

// const uploadDir = path.join(__dirname, '../public/users');
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

AppDataSource.initialize()
.then(async () => {
  console.log("Data Source has been initialized!");
})
.catch((error) => console.error("Error during Data Source initialization:", error));

const app = express();
const PORT = process.env.PORT || 3000;
const API_PREFIX = '/api'; // Define your API prefix

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(API_PREFIX, router);
// app.use(express.static(uploadDir));
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
