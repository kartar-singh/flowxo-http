
const axios = require("axios");
console.log("inside the authcontroller>>>>>>>>>>>>>")

exports.sendMessageToFxo =  async (req, res) => {
    const message = req.body;
    const url = 'https://bm.flowxo.com/integration_http/640b61558301e6007b350403';
    const secret = 'db55d9faba79d0d17c4c65fa4fc0f82c4f11cf253987d5b9';
  
    const opts = {
      headers: {
        Authorization: `Bearer ${secret}`
      }
    };
  
    try {
        await axios.post(url, req.body, opts);
        res.send({ ok: true });
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
  }

  const message = [];
  // exports.receveMessageFxo = async (req, res) => {
  //   try {
  //     console.log(JSON.stringify(req.body));
  //     const message = req.body;
  //     messages.push({ from: 'bot', message });
  //     res.send({ message_id: "123" });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send('Internal Server Error');
  //   }
  // }
  
  exports.messageListFxo = async (req, res) => {
    try {
      const messages =[] // get messages from somewhere
      res.send({ messages });
      console.log('messageList::',messages)
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
  
  
  let messages = [];
  
  exports.receveMessageFxo = async (request, response) => {
      console.log("this request is from bot >>>>0",request.body);
      messages.push({from:'bot', message:request.body});
      return response.send({ message_id: "1234" });
    };
  
  