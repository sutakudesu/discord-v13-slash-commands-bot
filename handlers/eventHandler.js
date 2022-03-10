const { readdirSync } = require("fs");
const client = global.client;

readdirSync("./events").forEach((file) => {
	const event = require(`../events/${file}`);
	client.on(event.name, event.run);
	console.log(`[Event] ${file.replace(".js", "")} event loaded.`);
});
