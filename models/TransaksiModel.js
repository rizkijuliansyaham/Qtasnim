import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const TransaksiData = db.define("Transaksi", {
    id_transaksi: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nama_barang: {
        type: DataTypes.STRING,
    },
    jumlah_terjual: {
        type: DataTypes.INTEGER,
    },
    tanggal_transaksi: {
        type: DataTypes.DATE,
    },
}, { timestamps: false });

export default TransaksiData;
