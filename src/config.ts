import dotenv from "dotenv";
dotenv.config();
const {
  port,
  psql_port,
  postgres_host,
  postgres_test_DB,
  postgres_password,
  postgres_DB,
  postgres_user,
  ENV,
  bcrypt_password,
  salt_rounds,
  token_secret
} = process.env;
export default {
  port,
  psql_port,
  postgres_host,
  postgres_test_DB,
  postgres_password,
  postgres_DB,
  postgres_user,
  ENV,
  bcrypt_password,
  salt_rounds,
  token_secret
};
