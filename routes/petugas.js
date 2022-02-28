const express = require(`express`)
const app = express()

app.use(express.json())

// panggil petugas controller
let petugasController = require("../controllers/petugasController")

// panggil Middlewares

// end-point get data petugas
app.get("/", petugasController.getDataPetugas)

// end-point add data petugas
app.post("/", petugasController.addDataPetugas)

// end-point edit data petugas
app.put("/:id_petugas", pelangganController.editDataPetugas)

// end-point delete data petugas
app.delete("/id_petugas", pelangganController.deleteDataPetugas)

module.exports = app 