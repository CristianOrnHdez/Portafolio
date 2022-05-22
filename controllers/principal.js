const { request, response } = require('express')

const principalGet = (req = request, res = response)=>{
    console.log('Get funcional')
    res.send('Get funcional')
}

const principalPost = (req, res)=>{
    console.log('Post funcional')
    res.send('Post funcional')
}

module.exports = {
    principalGet,
    principalPost
}