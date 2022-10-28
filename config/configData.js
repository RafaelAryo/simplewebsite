const moment = require('moment-timezone');
moment().tz("Asia/Bangkok").format();

let param = {
    data_awal : 0,
    data_satu : 0,
    data_dua : 0,
    data_tiga : 0,
    data_empat : 0,
    data_lima : 0,
    data_enam : 0,
    data_tujuh : 0,
    data_delapan : 0,
    data_sembilan : 0,
    data_sepuluh : 0,
    data_sebelas : 0,
    data_duabelas : 0,
    data_tigabelas : 0,
    data_empatbelas : 0,
    data_limabelas : 0,


    setData : (data)=>{
        param.data_awal = data[0];
        param.data_satu = data[1];
        param.data_dua = data[2];
        param.data_tiga = data[3];
        param.data_empat = data[4];
        param.data_lima = data[5];
        param.data_enam = data[6];
        param.data_tujuh = data[7];
        param.data_delapan = data[8];
        param.data_sembilan = data[9];
        param.data_sepuluh = data[10];
        param.data_sebelas = data[11];
        param.data_duabelas = data[12];
        param.data_tigabelas = data[13];
        param.data_empatbelas = data[14];
        param.data_limabelas = data[15];
    }
};
module.exports = param;
