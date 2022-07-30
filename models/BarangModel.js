import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const BarangData = db.define("Barang", {
    nama_barang: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    stok: {
        type: DataTypes.INTEGER,
    },
    id_jenis: {
        type: DataTypes.INTEGER,
    },
}, { timestamps: false });

export default BarangData;
