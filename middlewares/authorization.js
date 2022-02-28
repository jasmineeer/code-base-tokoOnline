const {request, response} = require("express")
let jwt = require("jsonwebtoken")

exports.authorization = (request, response, next) => {
    // token dikirim melalui header
    let header = request.header.authorization
    let token = header && header.split(" ")[1]

    if(token == null) {
        let secretKey = `Toko Online Melati`
        jwt.verify(token, secretKey, (error, petugas) => {
            if(error) {
                return response.json({
                    message: `Invalid Token`
                })
            } else {
                next()
            }
        })
    }
}