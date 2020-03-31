// Konversi Menit
/*
function konversiMenit(menit) {
    var sisa = menit%60;
    return((menit/60).toFixed() + ':' + (sisa >9 ? sisa : '0' + sisa));
  }
  */
//Revisi
function konversiMenit(menit){
  var sisa = menit%60;
  var str = (menit/60).toString();
  var jam = '';
  for(var i=0; i<str.length ; i++){
    if(menit%60 === 0){
      jam += menit/60;
    } else if(str[i] === "."){
        for(var j=0; j<i; j++){
          jam += str[j];
        }
    }
  }
  return jam + ':' + (sisa > 9 ? sisa : '0' + sisa);
}

  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00