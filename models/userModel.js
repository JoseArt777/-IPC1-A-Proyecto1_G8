const fs = require('fs');
const path = './data/users.json';

const getUsers = () => {
  const data = fs.readFileSync(path, 'utf-8');
  return JSON.parse(data);
};

const saveUsers = (users) => {
  fs.writeFileSync(path, JSON.stringify(users, null, 2), 'utf-8');
};

module.exports = { getUsers, saveUsers };
