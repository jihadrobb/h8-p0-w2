function xo(str) {
    var jumlahx = 0;
    var jumlaho = 0;
    for(var i=0; i<str.length; i++){
        if(str[i] === 'x'){
            jumlahx++;
        }else if(str[i] === 'o'){
            jumlaho++;
        } else {

        }
    }
    if(jumlahx === jumlaho){
        return true;
    } else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true