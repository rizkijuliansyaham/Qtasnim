import JenisData from "../models/JenisModel.js";


export const getDataJenis = async (req,res) => {
    try {
        const datas = await JenisData.findAll();
        res.json(datas);
    } catch (error) {
        res.json({message: error.message});
    }
}