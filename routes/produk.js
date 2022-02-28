const express = require(`express`)
const app = express()

app.use(express.json())

// panggil produk controller
let produkController = require("../controllers/produkController")

// panggil Middlewares
let uploadImage = require("../middlewares/uploadImage")

// end-point get data produk
app.get("/", produkController.getDataProduk)

// end-point add data produk
app.post("/", uploadImage.upload.single(`image`), produkController.addDataProduk)

// end-point edit data produk
app.put("/:id_produk", produkController.editDataProduk)

// end-point delete data produk
app.delete("/id_produk", produkController.deleteDataProduk)

module.exports = app 