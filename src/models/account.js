'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    // relacionamento entre as tabelas
    // hasOne - relacionamento de 1 para 1
    // hasMany - relacionamento de 1 para muitos
    static associate(models) {
      // define association here
      this.hasOne(models.User, {foreignKey: "account_id", as:"accounts"});
    }
  };

  Account.init({
    id: {
      type: sequelize.UUID,
      defaultValue: sequelize.UUID,
      primaryKey: true
    },
    name: sequelize.STRING,
    planLevel: sequelize.STRING
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};