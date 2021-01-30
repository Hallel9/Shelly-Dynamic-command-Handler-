// export the object so it can be required
module.exports = {
    // we want it to trigger multiple times
    once: false,
    // the actual function
    run(message) {
        if (message.content === "foo") {
            message.channel.send("you said foo");
        }
    }
};