import myClient1 from '../database'
export type orders_users = {
    order_id:number,
    status:string
}
export class DashboardQueries {
  async show_active(id: number): Promise<orders_users[] | undefined> {
    try {
      const connection = await myClient1.connect()
      const sql = 'SELECT order_id,status FROM orders INNER JOIN users ON orders.user_id=users.id WHERE user_id=$1 AND status=$2'
      const result = await connection.query(sql, [id, 'active'])
      connection.release()
      return result.rows
    } catch (err) {
      console.log(
        `we can't get these orders related to that user from orders table in database because ${err}`
      )
    }
  }
  
}
