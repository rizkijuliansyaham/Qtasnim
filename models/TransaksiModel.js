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
        references:true,
    },
    id_jenis: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    jumlah_terjual: {
        type: DataTypes.INTEGER,
    },
    tanggal_transaksi: {
        type: DataTypes.DATE,
    },
}, { timestamps: false });

export default TransaksiData;
