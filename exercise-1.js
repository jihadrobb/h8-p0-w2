/*
1. Newton Second Law
Secara matematis hukum II Newton dirumuskan sebagai berikut: ΣF = m x a

ΣF = resultan gaya (Newton)

m = massa benda (kg)

a = percepatan benda (m/s2)

Berdasarkan keterangan di atas, buatlah sebuah algoritma / pseudocode untuk menghitung resultan gaya pada sebuah 
mobil yang memiliki massa benda 600 kg dan ketika didorong oleh tiga orang percepatannya adalah 2 m/s2!

ans:
STORE "m" to 600
STORE "a" to 2

CALCULATE "m" * "a"
STORE "f" to the result of calculation
DISPLAY "f"


2.Tahun Kabisat
Apa yang kamu ketahui tentang tanggal 29 Februari? Kamu pasti tahu jika suatu tahun memiliki tanggal 29 
Februari berarti tahun tersebut merupakan tahun kabisat.

Dalam kalender Gregorian, tahun kabisat memiliki beberapa kriteria yaitu antara lain:

Jika tahun habis di bagi 4 dan tidak habis di bagi 100, atau
Jika tahun habis di bagi 4, habis di bagi 100 dan habis di bagi 400
Buatlah algoritma & pseudocode untuk menentukan apakah suatu tahun merupakan tahun kabisat atau bukan!

ans:
STORE "year" to any number
IF ("year" mod 4 equals to 0 AND "year" mod 100 not equals to 0)
    DISPLAY "Tahun Kabisat"
ELSE IF ("year" mod 4 equals to 0 AND "year" mod 100 equals to 0 AND "year" mod 400 equals to 0)
    DISPLAY "Tahun Kabisat"
ELSE
    DISPLAY "Bukan Tahun Kabisat"
ENDIF

3. Laundry Day
Foxie akan mencuci pakaiannya menggunakan mesin cuci. Pakaian yang akan dicuci oleh Foxie sebanyak 20 dan
akan dimasukkan ke mesin cuci. Mesin cuci akan dinyalakan jika semua pakaian Foxie sudah masuk ke 
mesin cuci.

Bantulah Foxie untuk menghitung jumlah pakaian yang akan dimasukkan ke mesin cuci menggunakan algoritma &
 pseudocode perulangan!

ans:
STORE "sum" to 20
WHILE ("sum" > 0)
    ADD "clothes"
    CALCULATE "sum" - 1
ENDWHILE
TURN ON "washmachine"


4.Periksa Kuku
Seorang guru akan memeriksa kuku siswa-siswinya yang sebanyak 40 orang dengan cara berkeliling kelas. 
Jika guru menemukan siswa/siswi yang memiliki kuku yang panjang maka guru akan menghukum siswa/siswi 
tersebut, jika tidak guru akan memuji siswa/siswi tersebut.

Buatlah algoritma & pseudocode untuk permasalahan diatas.

ans:
FOR ("i" from 0 to 40)
    CHECK "nails" on "student[i]"
    IF ("nails" == "Good")
        DO "Appreciate"
    ELSE
        DO "Punish"
ENDFOR



*/