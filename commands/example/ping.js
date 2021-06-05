module.exports = {
    name: "ping",
    alias: ["p"],
    run: (client, message, args) => {
        return message.channel.send("Pong! " + args[0]);
    }
};