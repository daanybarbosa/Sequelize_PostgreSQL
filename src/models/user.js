'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    // associate - ira fazer o relacionamento entre as tabelas 
    static associate(models) {
      // define association here
    this.belongsTo(models.Account, {foreignKey: "account_id", as: "accounts"});
    }
  };

    // antes de criar o usuario ira criptografar o valor da senha 
    hooks: {
      beforeCreate: (user, options) => {
        return bcrypt
        .hash(user.password, 10)
        .then((hash) => {
          user.password = hash;
        })
        .catch((err) => {
          throw new Error(err);
        });
      }
    }

  User.init({
    id: {
      type: sequelize.UUID,
      defaultValue: sequelize.UUID,
      primaryKey: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};