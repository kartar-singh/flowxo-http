const express = require('express');

const router = express.Router();
const floXoBot = require('../Controller/flowxoController')

router.post('/message', floXoBot.sendMessageToFxo)
router.post('/bot', floXoBot.receveMessageFxo)
//Retrieve the list of messages
// router.get("/messages", floXoBot.messageListFxo)
// router.get("/", floXoBot.getRequest)
router.get("/conversation", floXoBot.conversationData)

  
  

module.exports = router;
