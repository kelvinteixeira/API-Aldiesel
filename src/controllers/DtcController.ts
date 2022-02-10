import { Request, Response } from "express";
import knex from "../database/connection";

export default {
  async create(req: Request, res: Response) {
    try {
      const { codigo, dtc, estado, id_carro } = req.body
      const data = { codigo, dtc, estado, id_carro }
      await knex('dtcs').insert(data)
      return res.status(201).json({
        message: "DTCs cadastrados com com sucesso!",
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
      const ordemDesevicos = await knex('dtcs').orderBy('id_dtc')
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
      const dtc = await knex('dtcs').where({ id_os })
      return res.status(200).json(dtc)
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      })
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id_dtc } = req.params
      const { codigo, dtc, estado, id_carro } = req.body
      const data = { codigo, dtc, estado, id_carro }
      await knex('dtcs').update(data).where({ id_dtc })
      const dtcs = await knex('dtcs').where({ id_dtc })
      return res.status(200).json({
        message: 'DTCs atualizados com sucesso!',
        dtcs
      })
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      })
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id_dtc } = req.params
      await knex('dtcs').delete().where({ id_dtc })
      return res.status(200).json({ message: "DTCs excluidos com sucesso!" })
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      })
    }
  }
}
