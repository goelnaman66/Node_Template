const express = require('express');
const router = express.Router();

router.get('/info', (req, res)=>{
    return res.json({msg: "OK version v2"});
});

module.exports = router;