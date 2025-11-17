import { DataSource } from "typeorm";
import { User } from './entities/user';
import { Product } from "./entities/products";

export const AppDataSource = new DataSource({
  type: "mysql", // or "mysql", "sqlite", etc.
  host: "localhost",
  port: 3306,
  username: "rey",
  password: "rey",
  database: "node23_vitereact",
  synchronize: true, // Use with caution in production
  logging: false,
  entities: [User, Product], // List your entities here
  migrations: [],
  subscribers: [],
});