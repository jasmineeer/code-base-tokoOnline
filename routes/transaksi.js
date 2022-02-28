const express = require(`express`)
const app = express()

app.use(express.json())

// panggil transaksi controller
let transaksiController = require("../controllers/transaksiController")

// panggil Middlewares

// end-point get data transaksi
app.get("/", transaksiController.getDataTransaksi)

// end-point add data transaksi
app.post("/", transaksiController.addDataTransaksi)

// end-point edit data transaksi
app.put("/:id_transaksi", transaksiController.editDataTransaksi)

// end-point delete data transaksi
app.delete("/id_transaksi", transaksiController.deleteDataTransaksi)

module.exports = app 