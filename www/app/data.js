function update(){
    var socket = io.connect();
    socket.on('kirim',(data)=>{
        data1 = parseFloat(data.parsingData[0]);
        data2 = parseFloat(data.parsingData[1]);
        data3 = parseFloat(data.parsingData[2]);
        data4 = parseFloat(data.parsingData[3]);
        data5 = parseFloat(data.parsingData[4]);
        data6 = parseFloat(data.parsingData[5]);
        data7 = parseFloat(data.parsingData[6]);
        data8 = parseFloat(data.parsingData[7]);
        data9 = parseFloat(data.parsingData[8]);
        data10 = parseFloat(data.parsingData[9]);
        data11 = parseFloat(data.parsingData[10]);
        data12 = parseFloat(data.parsingData[11]);
        data13 = parseFloat(data.parsingData[12]);
        data14 = parseFloat(data.parsingData[13]);
        data15 = parseFloat(data.parsingData[14]);
        data16 = parseFloat(data.parsingData[15]);


        $("#data1").html(data1);
        $("#data2").html(data2);
        $("#data3").html(data3);
        $("#data4").html(data4);
        $("#data5").html(data5);
        $("#data6").html(data6);
        $("#data7").html(data7);
        $("#data8").html(data8);
        $("#data9").html(data9);
        $("#data10").html(data10);
        $("#data11").html(data11);
        $("#data12").html(data12);
        $("#data13").html(data13);
        $("#data14").html(data14);
        $("#data15").html(data15);
        $("#data16").html(data16);
    });
}