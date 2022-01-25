import { Request, Response } from "express";
import knex from "../database/connection";

export default {
  async create(req: Request, res: Response) {
    try {
      const { situacao, diagnostico, data_alteracao, mecanico, id_carros } = req.body
      const data = { situacao, diagnostico, data_alteracao, mecanico, id_carros }
      await knex('ordens').insert(data)
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
      const ordemDesevicos = await knex('ordens').orderBy('id_os')
      return res.status(200).json(ordemDesevicos)
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      })
    }
  },

  async find(req: Request, res: Response) {
    try {
      const { id_os } = req.params
      const os = await knex('ordens').where({ id_os })
      return res.status(200).json(os)
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      })
    }
  },



  async update(req: Request, res: Response) {
    try {

      const { id_os } = req.params
      const { situacao, diagnostico, data_alteracao, mecanico, id_carros } = req.body
      const data = { situacao, diagnostico, data_alteracao, mecanico, id_carros }
      await knex('ordens').update(data).where({ id_os })
      const os = await knex('ordens').where({ id_os })
      return res.status(200).json({
        message: 'Ordem de servico atualizada com sucesso!',
        os
      })
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      })
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id_os } = req.params
      await knex('ordens').delete().where({ id_os })
      return res.status(200).json({ message: "Ordem de servico excluida com sucesso!" })
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      })
    }
  }
}
