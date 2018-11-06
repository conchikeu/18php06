function login() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	if (username == '') {
		document.getElementById('inputUsername').innerHTML = "Please input Username!";
	}
	if (password == '') {
		document.getElementById('inputPassword').innerHTML = "Please input Password!";
	}
	else if (username != '' && password != '') {
		document.getElementById('success').innerHTML = 'Login Success!';
		document.getElementById('inputUsername').innerHTML = '';
		document.getElementById('inputPassword').innerHTML = '';
	}
	console.log(username);
	console.log(password);
}

