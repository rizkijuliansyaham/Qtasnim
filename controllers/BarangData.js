import BarangData from "../models/BarangModel.js";


export const getDataBarang = async (req,res) => {
    try {
        const datas = await BarangData.findAll();
        res.json(datas);
    } catch (error) {
        res.json({message: error.message});
    }
}

