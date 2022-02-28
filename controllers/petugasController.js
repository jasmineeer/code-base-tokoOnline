const md5 = require("md5")

// memanggil file model untuk petugas
let modelPetugas = require("../models/index").petugas 

exports.getDataPetugas = (request, response) => {
    modelPetugas.findAll()
    .then(result => {
        return response.json(result)
    })
    .catch(error => {
        return response.json({
            message: error.message 
        })
    })
}
exports.addDataPetugas = (request, response) => {
    // tampung data request
    let newPetugas = {
        nama_petugas: request.body.nama_petugas,
        username: request.body.username,
        password: md5(request.body.password),
        telp_petugas: request.body.telp_petugas 
    }

    modelPetugas.create(newPetugas)
    .then(result => {
        return response.json({
            message: `Data Petugas inserted`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message 
        })
    })
}

exports.editDataPetugas = (request, response) => {
    let id = request.params.id_petugas
    let dataPetugas = {
        nama_petugas: request.body.nama_petugas,
        username: request.body.username,
        password: md5(request.body.password),
        telp_petugas: request.body.telp_petugas 
    }

    modelPetugas.update(dataPetugas, { where: { id_petugas: id } })
    .then(result => {
        return response.json({
            message: `Data Petugas updated`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message 
        })
    })
}

exports.deleteDataPetugas = (request, response) => {
    let id = request.params.id_petugas

    modelPetugas.destroy({ where: { id_petugas: id } })
    .then(result => {
        return response.json({
            message: `Data Petugas deleted`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message 
        })
    })
}