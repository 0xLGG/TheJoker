const fetch = require('node-fetch');

module.exports = {
    name: "joke",
    alias: ["j"],
     run: async (client, message, args) => {
       const options = {
          headers: {"Accept": "text/plain"}
        }

        const endpoint = 'https://icanhazdadjoke.com';

        const res = await fetch(endpoint, options);

        if (!res) {
          console.error('no response for endpoint: ', endpoint);
          return;
        }

        const joke = await res.text();

        if (!joke) {
          console.error('no text resonse in joke request');
          return;
        }

        return message.channel.send(joke);
    }
};