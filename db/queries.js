const pool = require('./pool');

const countMessages = async () => {
  const { rows } = await pool.query('SELECT COUNT(*) FROM messages');

  return Number(rows[0].count);
};

const getMessages = async (page = 1) => {
  if (page <= 0) {
    return;
  }

  const limit = 5;
  const offset = (page - 1) * limit;

  const { rows } = await pool.query(
    `SELECT
      messages.id,
      messages.title,
      messages.content,
      messages.created_at AS "createdAt",
      users.id AS "userId",
      users.first_name AS "firstName",
      users.last_name AS "lastName",
      users.membership_status AS "membershipStatus"
    FROM messages
    JOIN users ON messages.created_by = users.id
    ORDER BY messages.created_at DESC
    OFFSET $1 LIMIT $2`,
    [offset, limit]
  );

  return rows;
};

const addMessage = async (title, content, author) => {
  await pool.query(
    'INSERT INTO messages (title, content, created_by) VALUES ($1, $2, $3)',
    [title, content, author]
  );
};

const deleteMessage = async (id) => {
  await pool.query('DELETE FROM messages WHERE id = $1', [id]);
};

const getUserById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

  return rows[0] || null;
};

const getUserByUsername = async (username) => {
  const { rows } = await pool.query('SELECT * FROM users WHERE username = $1', [
    username,
  ]);

  return rows[0] || null;
};

const addUser = async (firstName, lastName, username, password) => {
  await pool.query(
    'INSERT INTO users (first_name, last_name, username, password) VALUES ($1, $2, $3, $4)',
    [firstName, lastName, username, password]
  );
};

module.exports = {
  countMessages,
  getMessages,
  addMessage,
  deleteMessage,
  getUserById,
  getUserByUsername,
  addUser,
};
