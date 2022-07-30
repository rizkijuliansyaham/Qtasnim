import BarangData from "../models/BarangModel.js";


export const getDataBarang = async (req,res) => {
    try {
        const datas = await BarangData.findAll();
        res.json(datas);
    } catch (error) {
        res.json({message: error.message});
    }
};


export const updateDataBarang = async (req,res) => {
    try {
        await BarangData.update(req.body, {
            where: {
                nama_barang: req.params.nama_barang,
            },
        });
        res.json({
            message: "data update",
        });
    } catch (error) {
        res.json({message: error.message});
    }
};


export const getBarangById = async (req, res) => {
    try {
        const datas = await BarangData.findAll({
            where: {
                nama_barang: req.params.nama_barang,
            },
        });
        res.send(datas[0]);
    } catch (err) {
        console.log(err);
    }
};

export const createDataBarang = async (req, res) => {
    try {
        await BarangData.create(req.body);
        res.json({
            "message" : "Barang dibuat"
        });
    } catch (error) {
        console.log(error);
    }
};

export const deleteBarang = async (req, res) => {
    try {
        await BarangData.destroy({
            where: {
                nama_barang: req.params.nama_barang
            }
        });
        res.json({
            message: "Barang dihapus"
        });
    } catch (error) {
        
    }
}




