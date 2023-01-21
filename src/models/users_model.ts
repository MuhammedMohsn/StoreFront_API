import myClient1 from "../database";
import bcrypt from "bcrypt";
import config from "../config";
export type user = {
  email: string;
  id: number;
  firstname: string;
  lastname: string;
  password: string;
};
function compare(
  entered_password_with_pepper: string,
  found_password: string
): boolean {
  return bcrypt.compareSync(entered_password_with_pepper, found_password);
}
export class UsersTable {
  async index(): Promise<user[] | undefined> {
    try {
      const connection = await myClient1.connect();
      const sql = "SELECT * FROM users";
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (err) {
      console.log(
        `we can't get all users from users table in database because ${err}`
      );
    }
  }

  async show(id: number): Promise<user | undefined> {
    try {
      const connection = await myClient1.connect();
      const sql = "SELECT * FROM users WHERE id=$1";
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      console.log(
        `we can't get this user from users table in database because ${err}`
      );
    }
  }

  async create(user: user): Promise<user | string | undefined> {
    try {
      const connection = await myClient1.connect();
      const sql = "SELECT * FROM users WHERE email=$1 OR id=$2";
      const result = await connection.query(sql, [user.email, user.id]);
      if (!result.rows[0]) {
        const sql =
          "INSERT INTO users (email,id,firstname,lastname,password) VALUES($1,$2,$3,$4,$5) RETURNING *";
        const result = await connection.query(sql, [
          user.email,
          user.id,
          user.firstname,
          user.lastname,
          user.password,
        ]);
        connection.release();
        return result.rows[0];
      } else {
        return "the user is existed or id is duplicated";
      }
    } catch (err) {
      console.log(
        `we can't add this user into users table in database because : ${err}`
      );
    }
  }
  async authentication(
    email: string,
    password: string
  ): Promise<user | null | undefined> {
    try {
      const connection = await myClient1.connect();
      const sql = "SELECT * FROM users WHERE email=$1";
      const result = await connection.query(sql, [email]);
      if (result.rows.length) {
        const user = result.rows[0];
        connection.release();
        const pepper = config.bcrypt_password as unknown as string;
        let ismatched_Passwords = compare(
          `${password}${pepper}`,
          user.password
        );
        if (ismatched_Passwords) {
          return user;
        }
      } else {
        return null;
      }
    } catch (err) {
      console.log(`the user can't be authenticated because ${err}`);
    }
  }
}
