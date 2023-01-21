import {DashboardQueries} from '../Services/dashboard'
import {Response} from 'express'
const dashboard_models = new DashboardQueries()
export async function show_active_order(id:number, res: Response){
    try {
      const orders = await dashboard_models.show_active(id)
      res.status(200).json(orders)
    } catch (err) {
      console.log(`we can't display orders for the user because :${err}`)
    }
  }