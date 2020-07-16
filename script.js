
//manipulasi array 

//1. menambah isi array 
//var arr = [1 , 'dua', true];
//cara menampilkan semua isi array 
//console.log(arr);

//cara menampilkan hanya 1 array tinggal tambahkan index ([])
//console.log(arr[1]);

//cara menambahkan array yang kosong
//var bla = [];

   // bla[0] = 'ariwisnu';
   // bla[1] = 'wisnuari';
   // bla [2] = 1;
   // bla [3] = true;
//
   // console.log(bla);

   //2. menghapus isi array 

   //var array = ['array ', 1 ,true];
   //ini cara menghapus nya 
   //array[1] = undefined;

   //console.log(array);
   
//3.menampilkan isi array
//var array = ['array ', 1, true, false];

//for (var i = 0; i < array.length; i++) {
    //console.log('data arrray ke' + (i + 1) + ' = ' + array[i]);
    
//}

//method pada array harus menggunakan ()

//1.join
var arr = ['ariwisnu ', 'sanjay', 'bar', 'cuplak', 'caplik'];

//console.log(arr.join(' '));

//2. push and pop
//arr.push('bradu',fatra);
//arr.pop();
//console.log(arr.join(' '));

//3. unshift and shift
//arr.unshift('yuco');
//arr.shift();
//console.log(arr.join(' '));

//4. Splice
// array.splice(indexawal, mauDihaousBerapa,elemenBaru1,elemenBaru2,..)
//arr.splice(1,2, 'sableng ','subleng');
//console.log(arr.join(' - '));

//5.slice
//Array.slice(awa,akhir);

var arr2 = arr.slice(1,3);
console.log(arr2.join(' - '));