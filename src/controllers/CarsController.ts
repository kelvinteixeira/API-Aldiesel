import { Request, Response } from "express";
import knex from "../database/connection";

export default {
  async create(req: Request, res: Response) {
    try {
      const { model, licensePlate, year, color, problem, idCostumer, entryDate } = req.body
      const data = { model, licensePlate, year, color, problem, idCostumer, entryDate }
      await knex('cars').insert(data)
      return res.status(201).json({
        message: "Carro cadastrado com com sucesso!",
        data: data
      })
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      })
    }
  },

  async createById(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { model, licensePlate, year, color, problem, idCostumer, entryDate } = req.body
      const data = { model, licensePlate, year, color, problem, idCostumer, entryDate }
      await knex('cars').insert(data).where(id)
      return res.status(201).json({
        message: "Carro cadastrado com com sucesso!",
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
      const cars = await knex('cars').orderBy('id')
      return res.status(200).json(cars)
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      })
    }
  },

  async find(req: Request, res: Response) {
    try {
      const { id } = req.params
      const car = await knex('cars').where({ id })
      return res.status(200).json(car)
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      })
    }
  },



  async update(req: Request, res: Response) {
    try {

      const { id } = req.params
      const { model, licensePlate, year, color, problem, idCostumer, entryDate } = req.body
      const data = { model, licensePlate, year, color, problem, idCostumer, entryDate }
      await knex('cars').update(data).where({ id })
      const car = await knex('cars').where({ id })
      return res.status(200).json({
        message: 'Dados atualizados com sucesso!',
        car
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
      await knex('cars').delete().where({ id })
      return res.status(200).json({ message: "Carro excluido com sucesso!" })
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      })
    }
  },
}
