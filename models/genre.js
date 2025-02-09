const pool = require("../config/db");

const Genre = {
  getAll: async () => {
    const result = await pool.query("SELECT * FROM genres");
    return result.rows;
  },
  getById: async (id) => {
    const result = await pool.query("SELECT * FROM genres WHERE id = $1", [id]);
    return result.rows[0];
  },
  create: async (name) => {
    const result = await pool.query("INSERT INTO genres (name) VALUES ($1) RETURNING *", [name]);
    return result.rows[0];
  },
  update: async (id, name) => {
    const result = await pool.query("UPDATE genres SET name = $1 WHERE id = $2 RETURNING *", [name, id]);
    return result.rows[0];
  },
  delete: async (id) => {
    const result = await pool.query("DELETE FROM genres WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
  },
};

module.exports = Genre;
