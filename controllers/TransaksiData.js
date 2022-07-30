import TransaksiData from "../models/TransaksiModel.js"


export const getDataTransaksi = async (req,res) => {
    try {
        const datas = await TransaksiData.findAll();
        res.json(datas);
    } catch (error) {
        res.json({message: error.message});
    }
}



export const updateDataTransaksi = async (req,res) => {
    try {
        await TransaksiData.update(req.body, {
            where: {
                id_transaksi: req.params.id_transaksi,
            },
        });
        res.json({
            message: "data update",
        });
    } catch (error) {
        res.json({message: error.message});
    }
};


export const getTransaksiById = async (req, res) => {
    try {
        const datas = await TransaksiData.findAll({
            where: {
                id_transaksi: req.params.id_transaksi,
            },
        });
        res.send(datas[0]);
    } catch (err) {
        console.log(err);
    }
};

export const createDataTransaksi = async (req, res) => {
    try {
        await TransaksiData.create(req.body);
        res.json({
            "message" : "Transaksi dibuat"
        });
    } catch (error) {
        console.log(error);
    }
};

export const deleteTransaksi = async (req, res) => {
    try {
        await TransaksiData.destroy({
            where: {
                id_transaksi: req.params.id_transaksi
            }
        });
        res.json({
            message: "Transaksi dihapus"
        });
    } catch (error) {
        
    }
}