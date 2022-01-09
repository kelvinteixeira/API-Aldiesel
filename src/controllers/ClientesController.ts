import { Request, Response } from "express";
import knex from "../database/connection";

export default {
  async create(req: Request, res: Response) {
    try {
      const { nome, telefone, endereco_rua, endereco_numero, endereco_bairro, endereco_cidade, endereco_estado} = req.body
      const data = { nome, telefone, endereco_rua, endereco_numero, endereco_bairro, endereco_cidade, endereco_estado }
      await knex('clientes').insert(data)
      return res.status(201).json({
        message: "Cliente cadastrado com com sucesso!",
        data: data
      })
    } catch (err) {
      console.log(err)
    }
  },

  async list(req: Request, res: Response) {
    try {
      const clientes = await knex('clientes').orderBy('id_cliente')
      return res.status(200).json(clientes)
    } catch (err) {
      console.log(err)
    }
  },

  async find(req: Request, res: Response) {
    const { id_cliente } = req.params
    const cliente = await knex('clientes').where({ id_cliente })
    return res.status(200).json(cliente)
  },



  async update(req: Request, res: Response) {
    try {

      const { id_cliente } = req.params
      const { nome, telefone, endereco_rua, endereco_numero, endereco_bairro, endereco_cidade, endereco_estado} = req.body
      const data = { nome, telefone, endereco_rua, endereco_numero, endereco_bairro, endereco_cidade, endereco_estado }
      await knex('clientes').update(data).where({ id_cliente })
      const cliente = await knex('ordemdeservico').where({ id_cliente })
      return res.status(200).json({
        message: 'Dados atualizados com sucesso!',
        cliente
      })
    } catch (err) {
      console.log(err)
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id_cliente } = req.params
      await knex('clientes').delete().where({ id_cliente })
      return res.status(200).json({ message: "Cliente excluido com sucesso!" })
    } catch (err) {
      console.log(err)
    }
  }
}
