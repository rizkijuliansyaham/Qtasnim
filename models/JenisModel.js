import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const JenisData = db.define("Jenis_barang", {
    id_jenis: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    jenis_barang: {
        type: DataTypes.STRING,
    },
}, { timestamps: false });

export default JenisData;
