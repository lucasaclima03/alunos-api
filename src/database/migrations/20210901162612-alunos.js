module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('alunos', {
    id: {
      type: Sequelize.INTEGER,
      allowNUll: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNUll: false,
    },
    sobrenome: {
      type: Sequelize.STRING,
      allowNUll: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNUll: false,
    },
    idade: {
      type: Sequelize.INTEGER,
      allowNUll: false,
    },
    peso: {
      type: Sequelize.FLOAT,
      allowNUll: false,
    },
    altura: {
      type: Sequelize.FLOAT,
      allowNUll: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

  }),

  down: (queryInterface) => queryInterface.dropTable('alunos'),
};
