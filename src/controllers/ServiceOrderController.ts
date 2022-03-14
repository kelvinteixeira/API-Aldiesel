import { Request, Response } from "express";
import knex from "../database/connection";

export default {
  async create(req: Request, res: Response) {
    try {
      const { situation, diagnosis, changeDate, mechanic, idCar } = req.body
      const data = { situation, diagnosis, changeDate, mechanic, idCar}
      await knex('service_orders').insert(data)
      return res.status(201).json({
        message: "Ordem de serviço cadastrada com com sucesso!",
        data: data
      })
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      })
    }
  },

  async list(req: Request, res: Response) {
    try {
      const serviceOrders = await knex('service_orders').orderBy('id')
      return res.status(200).json(serviceOrders)
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      })
    }
  },

  async find(req: Request, res: Response) {
    try {
      const { id } = req.params
      const serviceOrder = await knex('service_orders').where({ id })
      return res.status(200).json(serviceOrder)
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      })
    }
  },



  async update(req: Request, res: Response) {
    try {

      const { id } = req.params
      const { situation, diagnosis, changeDate, mechanic, idCar } = req.body
      const data = { situation, diagnosis, changeDate, mechanic, idCar }
      await knex('service_orders').update(data).where({ id })
      const serviceOrder = await knex('service_orders').where({ id })
      return res.status(200).json({
        message: 'Ordem de servico atualizada com sucesso!',
        serviceOrder
      })
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      })
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params
      await knex('service_orders').delete().where({ id })
      return res.status(200).json({ message: "Ordem de servico excluida com sucesso!" })
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      })
    }
  }
}
