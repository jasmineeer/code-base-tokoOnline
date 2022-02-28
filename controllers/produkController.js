const fs = require("fs")

// memanggil file model untuk produk
let modelProduk = require("../models/index").produk 

exports.getDataProduk = (request, response) => {
    modelProduk.findAll()
    .then(result => {
        return response.json(result)
    })
    .catch(error => {
        return response.json({
            message: error.message 
        })
    })
}
exports.addDataProduk = (request, response) => {
    if(!request.file) {
        return response.json({
            message: `No File uploaded`
        })
    }
    // tampung data request
    let newProduk = {
        nama_produk: request.body.nama_produk,
        deskripsi: request.body.deskripsi,
        harga: request.body.harga,
        image: request.file.filename 
    }

    modelProduk.create(newProduk)
    .then(result => {
        return response.json({
            message: `Data Produk inserted`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message 
        })
    })
}

exports.editDataProduk = (request, response) => {
    let id = request.params.id_produk
    let dataProduk = {
        nama_produk: request.body.nama_produk,
        deskripsi: request.body.deskripsi,
        harga: request.body.harga,
        image: request.file.filename 
    }

    modelProduk.update(dataProduk, { where: { id_produk: id } })
    .then(result => {
        return response.json({
            message: `Data Produk updated`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message 
        })
    })
}

exports.deleteDataProduk = (request, response) => {
    let id = request.params.id_produk

    // ambil data filename yang akan dihapus
    let produk = await modelProduk.findOne({where: { id_produk: id }})
    if(produk) {
        let oldFileName = produk.image
        // delete file
        let location = path.join(__dirname,"../image",oldFileName)
        fs.unlink(location)
    }

    modelProduk.destroy({ where: { id_produk: id } })
    .then(result => {
        return response.json({
            message: `Data Produk deleted`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message 
        })
    })
}