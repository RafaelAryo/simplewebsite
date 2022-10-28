const parsingData = require('./config/configData');

// Serial Comunication defenition //
const serial = require('./config/serialConnection'),
SerialPort = require('serialport'),
parsers = SerialPort.parsers,
dataParser = new parsers.Readline({
    delimiter : '\r\n'
}),
mainPortNum = "COM4",
mainBaudRate = 57600;
//end Serial comunicartion definition //

const express =  require('express'),
app = express(),
server = require('http').createServer(app),
io = require('socket.io').listen(server),
path = require('path');
const bodyParser = require('body-parser');

//config express for json
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname,'www')));

//route
//app.get('/data', function(req , res){
//    res.json({data : parsingData.graph});
//})

const portListen = 8080;
server.listen(portListen);
console.log("Server On localhost:"+portListen);

//main
let dataPort = null;
try {
    dataPort = serial.connectSerial(mainPortNum,mainBaudRate);

    dataPort.on('open', ()=>{
        setInterval(()=>{
            
        }, 1000);
    });
    console.log("Main Serial open, Star Recive data..");
    dataPort.pipe(dataParser);

dataParser.on('data', (data)=>{
    console.log(data);
    let result;
    
    result = serial.parsingRAWData(data,",");
    parsingData.setData(result);
    sendToSockets();
});

}catch(error){

};

function sendToSockets(){
    io.sockets.emit('kirim',{
        parsingData : [
            parsingData.data_awal,
            parsingData.data_satu,
            parsingData.data_dua,
            parsingData.data_tiga,
            parsingData.data_empat,
            parsingData.data_lima,
            parsingData.data_enam,
            parsingData.data_tujuh,
            parsingData.data_delapan,
            parsingData.data_sembilan,
            parsingData.data_sepuluh,
            parsingData.data_sebelas,
            parsingData.data_duabelas,
            parsingData.data_tigabelas,
            parsingData.data_empatbelas,
            parsingData.data_limabelas,
        ]
    });
    io.sockets.emit('dataCoordinate', {
        data : [
            parsingData.data_lima,
            parsingData.data_enam,
        ]
    });
};
