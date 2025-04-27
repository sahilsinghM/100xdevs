import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://postgresuser:postgrespassword@localhost:5432/postgres",
});

const CreateUsers = async () => {
  await client.connect();
  const query = `
    CREATE TABLE users2 (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(50) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `;
  const result = await client.query(query);
  console.log(result);
};

CreateUsers();
