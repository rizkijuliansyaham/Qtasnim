import TransaksiData from "../models/TransaksiModel.js"

// export const getDataTransaksi = async (req, res) => {
//     try {
//         const transaksi = await Transaksi.findAll();
//         res.json(transaksi);
//     } catch (error) {
//         res.json({message: error.message});
//     }
// }

export const getDataTransaksi = async (req,res) => {
    try {
        const datas = await TransaksiData.findAll();
        res.json(datas);
    } catch (error) {
        res.json({message: error.message});
    }
}