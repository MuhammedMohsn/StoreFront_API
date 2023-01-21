import myClient1 from "../database";
export type product = {
  id: number;
  name: string;
  price: number;
};
export class ProductsTable {
  async index(): Promise<product[] | undefined> {
    try {
      const connection = await myClient1.connect();
      const sql = "SELECT * FROM products";
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (err) {
      console.log(`we can't get all products from products table in database because ${err}`);
    }
  }

  async show(id: number): Promise<product | undefined> {
    try {
      const connection = await myClient1.connect();
      const sql = "SELECT * FROM products WHERE id=$1";
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      console.log(`we can't get this product from products table in database because ${err}`);
    }
  }

  async create(product: product): Promise<product | undefined> {
    try {
      const connection = await myClient1.connect();
      const sql = "INSERT INTO products VALUES($1,$2,$3) RETURNING *";
      const result = await connection.query(sql, [
        product.id,
        product.name,
        product.price,
      ]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      console.log(`we can't add this product into products table in database because ${err}`);
    }

  }
  async delete(id: number): Promise<product|undefined> {
    try {
  const sql = 'DELETE FROM products WHERE id=($1)'
  const conn = await myClient1.connect()
  const result = await conn.query(sql, [id])
  const deleted_product= result.rows[0]
  conn.release()
  return deleted_product
    } catch (err) {
      console.log(`we cannot delete this product because  ${err}`)
    }
}

}
