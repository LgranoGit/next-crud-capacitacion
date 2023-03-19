import { pool } from "../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      const result = await pool.query(
        "select * from productos where id=?",
        req.query.id
      );
      return res.status(200).json(result[0]);
    case "PUT":
      const { id, nombre, precio } = req.body;
      await pool.query("update productos set nombre=?, precio=? where id = ?", [
        nombre,
        precio,
        id,
      ]);
      return res.status(200).json("");
    case "DELETE":
      const resul = await pool.query(
        "delete from productos where id=?",
        req.query.id
      );
      return res.status(204).json({});
  }
}
