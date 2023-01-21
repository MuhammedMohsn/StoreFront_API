import myClient1 from '../database'
export type order = {
  order_id: number
  user_id: number
  status: string
}
export class OrdersTable {
  async create(order: order): Promise<order | undefined> {
    try {
      const connection = await myClient1.connect()
      const sql = 'INSERT INTO orders VALUES($1,$2,$3) RETURNING *'
      const result = await connection.query(sql, [
        order.order_id,
        order.user_id,
        order.status,
      ])
      connection.release()
      return result.rows[0]
    } catch (err) {
      console.log(
        `we can't add this order into orders table in database because ${err}`,
      )
    }
  }
}
