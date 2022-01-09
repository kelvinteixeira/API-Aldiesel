import { Request, Response } from "express";
import knex from "../database/connection";

export default {
  async create(req: Request, res: Response) {
    try {
      const { nome, modelo, placa, ano, cor, problema, id_cliente } = req.body
      const data = { nome, modelo, placa, ano, cor, problema, id_cliente  }
      await knex('carros').insert(data)
      return res.status(201).json({
        message: "Carro cadastrado com com sucesso!",
        data: data
      })
    } catch (err) {
      console.log(err)
    }
  },

  async list(req: Request, res: Response) {
    try {
      const carros = await knex('carros').orderBy('id_carros')
      return res.status(200).json(carros)
    } catch (err) {
      console.log(err)
    }
  },

  async find(req: Request, res: Response) {
    const { id_carros } = req.params
    const carro = await knex('carros').where({ id_carros })
    return res.status(200).json(carro)
  },



  async update(req: Request, res: Response) {
    try {

      const { id_carros } = req.params
      const { nome, modelo, placa, ano, cor, problema, id_cliente } = req.body
      const data = { nome, modelo, placa, ano, cor, problema, id_cliente }
      await knex('carros').update(data).where({ id_carros })
      const carro = await knex('carros').where({ id_carros })
      return res.status(200).json({
        message: 'Dados atualizados com sucesso!',
        carro
      })
    } catch (err) {
      console.log(err)
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id_carros } = req.params
      await knex('carros').delete().where({ id_carros })
      return res.status(200).json({ message: "Carro excluido com sucesso!" })
    } catch (err) {
      console.log(err)
    }
  }
}
