const SerialPort = require('serialport');

const mySerial = {
	myPort : null,
	dataReceive : null,
	connectSerial : (portNumber, baudRte) =>{
		// this function is to create serial object from the spesific port number
		myPort = new SerialPort(portNumber, {
			baudRate : baudRte
		});

		//myPort.pipe(parser); // port with parser
		this.myPort = myPort;
		return myPort;
	},
	parsingRAWData : (data,delimiter) => {
		//split the data into array
		let result = [];
		if(data != undefined)
			result = data.toString().replace(/(\r\n|\n|\r)/gm,"").split(delimiter);

		return result;
	},
};


module.exports = mySerial;