'use strict';

module.exports = {
	press(key) {
		console.log('press ', key);

		// send the pressed key to a local java program to display it
		const dgram = require('dgram');
		const message = 's,' + key;
		const client = dgram.createSocket('udp4');
		client.send(message, 7777, 'localhost', (err) => {
			client.close();
		});
	},
	release(key) {
		console.log('release ', key);
	},
	tap(key) {
		console.log('tap ', key);
	},
	moveTo(x, y) {
		console.log('moveTo ', x, y);
	},
};

console.log("test!");
