import { Request, Response } from "express";
import knex from "../database/connection";

export default {
  async create(req: Request, res: Response) {
    try {
      const { nome_cliente, telefone_cliente, os_numero, nome_mecanico, carro_modelo, carro_ano, carro_placa, carro_cor, descricao_problema, diagnostico, data_criacao, data_alteracao, situacao_atual, os_img, codigo1, codigo2, codigo3, codigo4, codigo5, codigo6, codigo7, codigo8, codigo9, codigo10, } = req.body
      const data = { nome_cliente, telefone_cliente, os_numero, nome_mecanico, carro_modelo, carro_ano, carro_placa, carro_cor, descricao_problema, diagnostico, data_criacao, data_alteracao, situacao_atual, os_img, codigo1, codigo2, codigo3, codigo4, codigo5, codigo6, codigo7, codigo8, codigo9, codigo10,  }
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
      const { nome_cliente, telefone_cliente, os_numero, nome_mecanico, carro_modelo, carro_ano, carro_placa, carro_cor, descricao_problema, diagnostico, data_criacao, data_alteracao, situacao_atual, os_img, codigo1, codigo2, codigo3, codigo4, codigo5, codigo6, codigo7, codigo8, codigo9, codigo10, } = req.body
      const data = { nome_cliente, telefone_cliente, os_numero, nome_mecanico, carro_modelo, carro_ano, carro_placa, carro_cor, descricao_problema, diagnostico, data_criacao, data_alteracao, situacao_atual, os_img, codigo1, codigo2, codigo3, codigo4, codigo5, codigo6, codigo7, codigo8, codigo9, codigo10, }
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
