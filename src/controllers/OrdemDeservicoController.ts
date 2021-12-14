import { Request, Response } from "express";
import knex from "../database/connection";

export default {
  async create(req: Request, res: Response) {
    const { nome_cliente, nome_mecanico, carro_modelo, carro_ano, carro_placa, carro_cor, problema_descricao } = req.body 
    const data = { nome_cliente, nome_mecanico, carro_modelo, carro_ano, carro_placa, carro_cor, problema_descricao  }
    await knex('ordemdeservico').insert(data)
    return res.status(201).json({
      message: "Ordem de serviço criada com sucesso!", 
      data: data
    })
  },

  async list(req: Request, res: Response) {
    const ordensDeServicos =  await knex('ordemdeservico').orderBy('id')
    return res.status(200).json( ordensDeServicos )
  },

  // async find(req: Request, res: Response) {
  //   const { id } = req.params
  //   const ordensDeServico = await knex('ordemDeServico').where({ id })
  //   return res.status(200).json(ordensDeServico)
  // },

  

  async update(req: Request, res: Response) {
    const { id } = req.params
    const { nome_cliente, nome_mecanico, carro_modelo, carro_ano, carro_placa, carro_cor, problema_descricao } = req.body 
    const data = { nome_cliente, nome_mecanico, carro_modelo, carro_ano, carro_placa, carro_cor, problema_descricao  }
    await knex('ordemdeservico').update(data).where({ id })
    const ordensDeServico = await knex('ordemdeservico').where({ id })
    return res.status(200).json({
      message: 'Alterado com sucesso em ' + new Date().toISOString(), 
      ordensDeServico
    })
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params
    await knex('ordemdeservico').delete().where({ id })
    return res.status(200).json({ message: "Ordem de serviço excluida com sucesso!"})
  }
}
