const aiService = require('../services/ai.service')

exports.getReview = async(req,res)=>{
    const {code} = req.body

    if(!code){
        return res.status(400).json({
            message:"prompt is required"
        })
    }

    const response = await aiService(code)

    res.send(response)
}