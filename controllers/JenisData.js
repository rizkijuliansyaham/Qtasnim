import JenisData from "../models/JenisModel.js";


export const getDataJenis = async (req,res) => {
    try {
        const datas = await JenisData.findAll();
        res.json(datas);
    } catch (error) {
        res.json({message: error.message});
    }
};



export const updateDataJenis = async (req,res) => {
    try {
        await JenisData.update(req.body, {
            where: {
                id_jenis: req.params.id_jenis,
            },
        });
        res.json({
            message: "data update",
        });
    } catch (error) {
        res.json({message: error.message});
    }
};


export const getJenisById = async (req, res) => {
    try {
        const datas = await JenisData.findAll({
            where: {
                id_jenis: req.params.id,
            },
        });
        res.send(datas[0]);
    } catch (err) {
        console.log(err);
    }
};

export const createDataJenis = async (req, res) => {
    try {
        await JenisData.create(req.body);
        res.json({
            "message" : "Jenis dibuat"
        });
    } catch (error) {
        console.log(error);
    }
};

export const deleteJenis = async (req, res) => {
    try {
        await BarangData.destroy({
            where: {
                id_jenis: req.params.id
            }
        });
        res.json({
            message: "Jenis dihapus"
        });
    } catch (error) {
        
    }
}