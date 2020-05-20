module.exports = {
  development: {
    client: 'sqilte3,
    connection: {
      filename: './data/budget.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
};
