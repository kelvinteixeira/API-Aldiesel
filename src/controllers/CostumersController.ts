import { Request, Response } from "express";
import knex from "../database/connection";

export default {
  async create(req: Request, res: Response) {
    try {
      const { name, phone, street, houseNumber, district, city, state, entryDate  } = req.body
      const dataCostumer = { name, phone, street, houseNumber, district, city, state, entryDate }
      await knex('costumers').insert(dataCostumer)
      return res.status(201).json({
        message: "Cliente cadastrado com com sucesso!",
        data: dataCostumer
      })
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      })
    }
  },

  async list(req: Request, res: Response) {
    try {
      const costumers = await knex('costumers').orderBy('id')
      const cars = await knex('cars').orderBy('id')
      const serviceOrders = await knex('service_orders').orderBy('id')
      return res.status(200).json({
          costumers,
          cars,
          serviceOrders
      })
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      })
    }
  },

  async find(req: Request, res: Response) {
    try {
      const { id } = req.params
      const costumer = await knex('costumers').where({ id })
      return res.status(200).json(costumer)
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      })
    }
  },



  async update(req: Request, res: Response) {
    try {

      const { id } = req.params
      const { name, phone, street, houseNumber, district, city, state, entryDate } = req.body
      const data = { name, phone, street, houseNumber, district, city, state, entryDate }
      await knex('costumers').update(data).where({ id })
      const costumer = await knex('costumers').where({ id })
      return res.status(200).json({
        message: 'Dados atualizados com sucesso!',
        costumer
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
      await knex('costumers').delete().where({ id })
      return res.status(200).json({ message: "Cliente excluido com sucesso!" })
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      })
    }
  }
}
