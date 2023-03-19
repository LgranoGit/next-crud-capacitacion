import { pool } from "../../config/db";

export default async function handler(req, res) {
  
  switch (req.method) {
    case "GET":
      const [rows] = await pool.query("select * from productos");      
      return res.json([rows][0]);
    case "DELETE":
      return res.status(204).json("borrado");
    case "POST":
      const { nombre, precio } = req.body;
      const result = await pool.query("insert into productos set ?", {
        nombre,
        precio,
      });
      return res.status(204).json("insertado");
  }
}
