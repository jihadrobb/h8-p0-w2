var tanggal = 29; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2020; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch(bulan){
    case 1:
        if(tahun<1900 || tahun >2200){
            console.log('Tahun error! Pilih 1900-2200');
            break;
        }else if(tanggal<1 || tanggal >31){
            console.log('Tanggal error! Pilih 1-31');
            break;
        }else {
            console.log(`${tanggal} Januari ${tahun}`);
            break;
    }
    case 2:
        var kabisat;
        if(tahun%4 == 0 && tahun%100 !=0){
            kabisat = true;
        }else if(tahun%4 == 0 && tahun%100 == 0 && tahun%400 == 0){
            kabisat = true;
        }else{
            kabisat = false;
        }
        
        if(tahun<1900 || tahun >2200){
            console.log('Tahun error! Pilih 1900-2200');
            break;
        }else if(kabisat == true && (tanggal>29 || tanggal<1)){
            console.log('Tanggal error! Pilih 1-29');
            break;
        }else if(kabisat==false && (tanggal <1 || tanggal >28)){
            console.log('Tanggal error! Pilih 1-28');
            break;
        }else {
            console.log(`${tanggal} Februari ${tahun}`);
            break;
        }
    case 3:
        if(tahun<1900 || tahun >2200){
            console.log('Tahun error! Pilih 1900-2200');
            break;
        }else if(tanggal<1 || tanggal >31){
            console.log('Tanggal error! Pilih 1-31');
            break;
        }else {
            console.log(`${tanggal} Maret ${tahun}`);
            break;
        }
    case 4:
        if(tahun<1900 || tahun >2200){
            console.log('Tahun error! Pilih 1900-2200');
            break;
        }else if(tanggal<1 || tanggal >30){
            console.log('Tanggal error! Pilih 1-30');
            break;
        }else {
            console.log(`${tanggal} April ${tahun}`);
            break;
        }
    case 5:
        if(tahun<1900 || tahun >2200){
            console.log('Tahun error! Pilih 1900-2200');
            break;
        }else if(tanggal<1 || tanggal >31){
            console.log('Tanggal error! Pilih 1-31');
            break;
        }else {
            console.log(`${tanggal} Mei ${tahun}`);
            break;
        }
    case 6:
        if(tahun<1900 || tahun >2200){
            console.log('Tahun error! Pilih 1900-2200');
            break;
        }else if(tanggal<1 || tanggal >31){
            console.log('Tanggal error! Pilih 1-30');
            break;
        }else {
            console.log(`${tanggal} Juni ${tahun}`);
            break;
        }
    case 7:
        if(tahun<1900 || tahun >2200){
            console.log('Tahun error! Pilih 1900-2200');
            break;
        }else if(tanggal<1 || tanggal >31){
            console.log('Tanggal error! Pilih 1-31');
            break;
        }else {
            console.log(`${tanggal} Juli ${tahun}`);
            break;
        }
    case 8:
        if(tahun<1900 || tahun >2200){
            console.log('Tahun error! Pilih 1900-2200');
            break;
        }else if(tanggal<1 || tanggal >31){
            console.log('Tanggal error! Pilih 1-31');
            break;
        }else {
            console.log(`${tanggal} Agustus ${tahun}`);
            break;
        }
    case 9:
        if(tahun<1900 || tahun >2200){
            console.log('Tahun error! Pilih 1900-2200');
            break;
        }else if(tanggal<1 || tanggal >31){
            console.log('Tanggal error! Pilih 1-30');
            break;
        }else {
            console.log(`${tanggal} September ${tahun}`);
            break;
        }
    case 10:
        if(tahun<1900 || tahun >2200){
            console.log('Tahun error! Pilih 1900-2200');
            break;
        }else if(tanggal<1 || tanggal >31){
            console.log('Tanggal error! Pilih 1-31');
            break;
        }else {
            console.log(`${tanggal} Oktober ${tahun}`);
            break;
        }
    case 11:
        if(tahun<1900 || tahun >2200){
            console.log('Tahun error! Pilih 1900-2200');
            break;
        }else if(tanggal<1 || tanggal >30){
            console.log('Tanggal error! Pilih 1-31');
            break;
        }else {
            console.log(`${tanggal} November ${tahun}`);
            break;
        }
    case 12:
        if(tahun<1900 || tahun >2200){
            console.log('Tahun error! Pilih 1900-2200');
            break;
        }else if(tanggal<1 || tanggal >31){
            console.log('Tanggal error! Pilih 1-31');
            break;
        }else {
            console.log(`${tanggal} Desember ${tahun}`);
            break;
        }
    default:
        console.log('Bulan error! Pilih 1-12');
}