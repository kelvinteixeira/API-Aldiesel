import { Request, Response } from "express";
import knex from "../database/connection";

export default {
  async create(req: Request, res: Response) {
    try {
      const { nome_cliente, nome_mecanico, carro_modelo, carro_ano, carro_placa, carro_cor, problema_descricao, cliente_telefone, data_criacao, situacao_atual } = req.body
      const data = { cliente_telefone, data_criacao, situacao_atual, nome_cliente, nome_mecanico, carro_modelo, carro_ano, carro_placa, carro_cor, problema_descricao }
      await knex('ordemdeservico').insert(data)
      return res.status(201).json({
        message: "Ordem de serviço criada com sucesso!",
        data: data
      })
    } catch (err) {
      console.log(err)
    }
  },

  async list(req: Request, res: Response) {
    try {
      const ordensDeServicos = await knex('ordemdeservico').orderBy('id')
      return res.status(200).json(ordensDeServicos)
    } catch (err) {
      console.log(err)
    }
  },

  async find(req: Request, res: Response) {
    const { id } = req.params
    const ordensDeServico = await knex('ordemdeservico').where({ id })
    return res.status(200).json(ordensDeServico)
  },



  async update(req: Request, res: Response) {
    try {

      const { id } = req.params
      const { nome_cliente, nome_mecanico, carro_modelo, carro_ano, carro_placa, carro_cor, problema_descricao, cliente_telefone, data_criacao, situacao_atual } = req.body
      const data = { cliente_telefone, data_criacao, situacao_atual, nome_cliente, nome_mecanico, carro_modelo, carro_ano, carro_placa, carro_cor, problema_descricao }
      await knex('ordemdeservico').update(data).where({ id })
      const ordemDeServico = await knex('ordemdeservico').where({ id })
      return res.status(200).json({
        message: 'Alterado com sucesso em ' + new Date().toISOString(),
        ordemDeServico
      })
    } catch (err) {
      console.log(err)
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params
      await knex('ordemdeservico').delete().where({ id })
      return res.status(200).json({ message: "Ordem de serviço excluida com sucesso!" })
    } catch (err) {
      console.log(err)
    }
  }
}
