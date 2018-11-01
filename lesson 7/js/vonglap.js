// // for (var i =0; i < 10; i++){
// // 	document.write(i);
// // 	document.write('<br>');
// // }

// // // document.write('<br>');
// // // var a = 5;
// // // var b;
// // // b= 5 + a++;
// // // // document.write(b);
// // // document.write('<br>');

// // var x = 7;
// // var y;
// // y = 6 + ++x + 8 + x-- + x++ + 7 - ++x;

// // document.write(y);
// // document.write('<br>');
// // document.write(x);

// // document.write('<br>');

// var n = 3;
// while(n < 5){
// 	document.write(n);
// 	document.write('<br>');
// 	n++;
// }
// var m = 7;
// do {
// 	document.write(m);
// 	document.write('<br>');
// 	m++;
// } while(m < 5);

// //1
// var codition1=true;
// var codition2=true;
// if (condition1) {

// }

// //2
// if (condition1) {
// 	//code
// }else{
// 	//code
// }

// //3
// if(condition1){
// 	//code
// } else if (codition2){
// 	//code
// } else {
// 	//code
// // }
// for (var i = 0; i <= 100; i++){
// 	document.write('<br>');
// 	if ((i % 3 == 0) && !(i % 15 == 0)){
// 		document.write('<br>');
// 		document.write('So ',i, ' chia het cho 3');
// 		document.write('<br>');
// 	} else if ((i % 5 == 0) && !(i % 15 == 0)){
// 		document.write('<br>');
// 		document.write('So ',i, ' chia het cho 5');
// 		document.write('<br>');
// 	} else if (i % 15 == 0){
// 		document.write('<br>');
// 		document.write('So ',i, ' chia het cho 15');
// 		document.write('<br>');
// 	} else {
// 		document.write('So ',i, ' khong chia het cho 3, 5, 15');
// 	}
// }


//switch case
var k = 2;
switch (k){
	case 1: case 3: case 5: case 7: case 8: case 10:case 12:
		document.write('Month ' + k + ' have 31 days');
		console.log(k);
		break;
	case 4: case 6: case 9: case 11:
		document.write( + k + ' have 30 days');
		break;
	case 28, 29:
		document.write('So 3');
		break;
	default:
	document.write('Month ' +k+ ' Fuck you');
	break;
}