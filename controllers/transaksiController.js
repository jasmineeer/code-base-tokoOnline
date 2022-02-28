const {request, response} = require("express")
const req = require("express/lib/request")

let transaksiModel = require("../models/index").transaksi
let detailTransaksiModel = require("../models/index").detail_transaksi

exports.getDataTransaksi = async(request, response) => {
    let data = await transaksiModel.findAll({
        include: ["pelanggan", "petugas", {
            model: detailTransaksiModel,
            as: "detail_transaksi",
            include: ["produk", "transaksi"] 
        }]
    })
    return response.json(data)
}

exports.addDataTransaksi = (request, response) => {
    let subtotal 
    subtotal = qty*harga_produk
    subtotal +=

    let newData = {
        id_pelanggan: request.data.id_pelanggan,
        id_petugas: request.data.id_petugas,
        tgl_transaksi = request.data.transaksi,
        id_produk: request.data.produk,
        qty: request.data.qty,
        subtotal: subtotal 
    }

    // insert ke tabel transaksi
    transaksiModel.create(newData)
    .then(result => {
        let detail_transaksi = request.body.detail_transaksi
        let id = result.id_transaksi
        for (let i = 0; i < detail_transaksi.length; i++) {
            detail_transaksi[i].id_transaksi = id 
        }

        // insert ke tabel detail
        detailTransaksiModel.bulkCreate(detail_transaksi)
        // bulkCreate = bisa banyak data (array)
        .then(result => {
            return response.json({
                message: `Data Transaksi inserted`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.updateDataTransaksi = (request, response) => {
    
}

exports.deleteDataTransaksi = (request, response) => {
    
}