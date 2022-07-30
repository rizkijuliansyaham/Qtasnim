import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Transaksi = db.define("Transaksi", {
    id_transaksi: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    nama_barang: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    jumlah_terjual: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tanggal_transaksi: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, { timestamps: false });

export default Transaksi;


(async()=> {
    await db.sync();
})();
