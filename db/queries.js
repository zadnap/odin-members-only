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
      messages.description,
      messages.created_at AS "createdAt",
      users.id AS "userId",
      users.username AS "username",
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

const addMessage = async (title, description, author) => {
  await pool.query(
    'INSERT INTO messages (title, description, created_by) VALUES ($1, $2, $3)',
    [title, description, author]
  );
};

const deleteMessage = async (id) => {
  await pool.query('DELETE FROM messages WHERE id = $1', [id]);
};

const getUserById = async (id) => {
  const { rows } = await pool.query(
    `
    SELECT 
      id, 
      first_name AS "firstName", 
      last_name AS "lastName",
      username,
      membership_status AS "membershipStatus"
    FROM users WHERE id = $1
    `,
    [id]
  );

  return rows[0] || null;
};

const getUserByUsername = async (username) => {
  const { rows } = await pool.query(
    `
    SELECT 
      id, 
      first_name AS "firstName", 
      last_name AS "lastName",
      username,
      membership_status AS "membershipStatus",
      password
    FROM users WHERE username = $1
    `,
    [username]
  );

  return rows[0] || null;
};

const addUser = async (firstName, lastName, username, password) => {
  const result = await pool.query(
    `
    INSERT INTO users (first_name, last_name, username, password) 
    VALUES ($1, $2, $3, $4)
    RETURNING 
      id, 
      first_name AS "firstName", 
      last_name AS "lastName", 
      username, 
      membership_status AS "membershipStatus"
    `,
    [firstName, lastName, username, password]
  );

  return result.rows[0];
};

const updateMembershipStatus = async (id, membershipStatus) => {
  await pool.query('UPDATE users SET membership_status = $1 WHERE id = $2', [
    membershipStatus,
    id,
  ]);
};

module.exports = {
  countMessages,
  getMessages,
  addMessage,
  deleteMessage,
  getUserById,
  getUserByUsername,
  addUser,
  updateMembershipStatus,
};
