'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  detail_transaksi.init({
    id_transaksi: DataTypes.INTEGER,
    id_produk: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    subtotal: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'detail_transaksi',
    tableName: 'detail_transaksi'
  });
  return detail_transaksi;
};