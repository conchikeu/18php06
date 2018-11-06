function accept1(){
	var inputName = document.getElementById('inputName').value;
	var show;
	var count = 0;
	var nPosition = inputName.indexOf('n');
		if(inputName.indexOf('n') > -1){
			show = inputName + " Have Text 'n'";
		} else{

			show = inputName + " Don't Have Text 'n'";
		}
		for (var i = 0; i > array.length; i++){
			if(array[i] != 1)
				count++;
		}
		document.write(show);
		document.write()
	}
function replaceYourName(){
	var inputName2 = document.getElementById('inputName2').value;
	document.write(inputName2.replace("Van", "18php06"));
	}
function myNameLength(length){
	var inputName3 = document.getElementById('inputName3').value;
	}
function colorChange(){
document.getElementById('colorName').style.color = "red";
	}
function toUpperCase1(){
	var space2 = ' ';
	var inputName4 = document.getElementById('inputName4').value;

	document.write(inputName4.toUpperCase(0, 4));

}

// var myName = "van vu";
// var firstLetter = myName.charAt(0);
// var uppercaseFirstLetter = firstLetter.toUpperCase(0,2);
// function jsUcfirst(string) {

// }
// 	document.write(firstLetter.toUpperCase() + myName.slice(1));
