"use strict";
const robot = require('beam-keyboard/lib/handlers/mouse/robot-js.js');

for(var a in robot) { module.exports[a] = robot[a]; }

const mouseExport = {
	constrainedMove(x, y) {
		console.log("constrainedMove ", x, y);
	},
	moveTo(x, y) {
		console.log("moveTo ", x, y);
	},
	relativeConstrainedMove(x, y) {
		console.log("relativeConstrainedMove ", x, y);

		// send the coordinates to a local java program to display the position on the screen
		const dgram = require('dgram');
		const message = 'c,' + x + ',' + y;
		const client = dgram.createSocket('udp4');
		client.send(message, 7777, 'localhost', (err) => {
			client.close();
		});
	},
};

for(var a in mouseExport) { module.exports[a] = mouseExport[a]; }

console.log("mouse test!");
