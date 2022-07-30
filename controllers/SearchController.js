import { Op } from "sequelize";
import Transaksi from "../models/SearchModel.js";


export const getDataSearch = async(req, res) =>{
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search_query || "";
    const offset = limit * page;
    const totalRows = await Transaksi.count({
        where:{
            [Op.or]: [{nama_barang:{
                [Op.like]:'%'+search+'%'
            }}]
        }
    }); 
    const totalPage = Math.ceil(totalRows / limit);
    const result = await Transaksi.findAll({
        where: {
            [Op.or]: [{nama_barang:{
                [Op.like]:'%'+search+'%'
            }}]
        },
        offset: offset,
        limit: limit,
        order:[
            ['nama_barang', 'DESC']
        ]
    });
    res.json({
        result: result,
        page:page+1,
        limit: limit,
        totalRows: totalRows,
        totalPage: totalPage
    });
}

// localhost:5000/search?search_query=Kop
// `http://localhost:5000/users?search_query=${keyword}&page=${page}&limit=${limit}`