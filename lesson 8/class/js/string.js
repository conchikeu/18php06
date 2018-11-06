var str = "Hi-";
var str2 = "Hello";
var a = 5;
console.log(str);
console.log(str2);
console.log(typeof str);
console.log(typeof str2);
console.log(typeof a);
var str3 = '';
str3 = str + str2;
console.log(str3);
console.log(typeof str3);

console.log(str3.length);

document.getElementById('example1').innerHTML = str;

var classexample1 = document.getElementById('example1');
classexample1[1].innerHTML = str2;

console.log(classexample1[0]);

//Kiem tra chu 'o' co trong string 1 (str) khong?
//New co thi tra ve vi tri cua ky tu
// Neu khong tra ve -1
var o_Position = str.indexOf('h');
console.log(o_Position);
var b_Position = str2.indexOf('l');
console.log(b_Position);
var o_Position = str.indexOf('o');
console.log(o_Position);
//cat 1 chuoi tu vi tri bat dau va vi tri ket thuc
console.log(str2.slice(1,3));
//cat 1 chuoi tu vi tri bat dau va vi tri ket thuc
console.log(str2.substring(1,3));

//cat 1 chuoi tu vi tri bat dau va vi tri ket thuc
console.log(str2.substr(1,3));
//Thay theo 1 ky tu hoac 1 chuoi ky tu trong chuoi
console.log(str2.replace('Hello', 'SDC'));
//Chuyen mot chuoi viet thuong thành viết hoa
console.log(str2.toUpperCase('llo'));