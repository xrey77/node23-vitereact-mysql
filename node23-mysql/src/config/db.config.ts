export default {
    HOST: process.env.DB_HOST || "localhost",
    USER: process.env.DB_USER || "rey",
    PASSWORD: process.env.DB_PASSWORD || "rey",
    DB: process.env.DB_NAME || "node23_vitereact",
    PORT: parseInt(process.env.DB_PORT || "3306", 10),
  };
  