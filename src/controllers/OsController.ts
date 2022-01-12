import { Request, Response } from "express";
import knex from "../database/connection";

export default {
  async create(req: Request, res: Response) {
    try {
      const { diagnostico, mecanico, data_alteracao, codigo, dtc, id_carro } = req.body
      const data = { diagnostico, mecanico, data_alteracao, codigo, dtc, id_carro }
      await knex('ordens').insert(data)
      return res.status(201).json({
        message: "Ordem de serviço cadastrada com com sucesso!",
        data: data
      })
    } catch (err) {
      console.log(err)
    }
  },

  async list(req: Request, res: Response) {
    try {
      const ordemDesevicos = await knex('ordens').orderBy('id_os')
      return res.status(200).json(ordemDesevicos)
    } catch (err) {
      console.log(err)
    }
  },

  async find(req: Request, res: Response) {
    const { id_os } = req.params
    const ordemDeServico = await knex('ordens').where({ id_os })
    return res.status(200).json(ordemDeServico)
  },



  async update(req: Request, res: Response) {
    try {

      const { id_os } = req.params
      const { diagnostico, mecanico, data_alteracao, codigo, dtc, id_carro } = req.body
      const data = { diagnostico, mecanico, data_alteracao, codigo, dtc, id_carro }
      await knex('ordens').update(data).where({ id_os })
      const cliente = await knex('ordens').where({ id_os })
      return res.status(200).json({
        message: 'Ordem de servico atualizada com sucesso!',
        cliente
      })
    } catch (err) {
      console.log(err)
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id_cliente } = req.params
      await knex('ordens').delete().where({ id_cliente })
      return res.status(200).json({ message: "Ordem de servico excluida com sucesso!" })
    } catch (err) {
      console.log(err)
    }
  }
}
