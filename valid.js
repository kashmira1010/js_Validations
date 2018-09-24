	window.onload = function() {
	
    users = JSON.parse(localStorage.getItem('users'));
    if (users === null) {
        console.log("Users not present");
        users = [];
    } else {
        for (var i = 0; i < users.length; i++) {
        getData(users[i]);
        }
    }
}
var users = [];
var fname = 0;
var lname = 0;
var emailId = 0;
var org = 0;
var phNo = 0;
var genderId = 0;
var userObj = 0;

function addUser() {
	
    var isValid = true;
    var firstname = document.getElementById('firstname').value;
    if (firstname == null || firstname == '') {
        if (fname < 1) {
            document.getElementById('firstname').insertAdjacentHTML('afterend', "<span id='fn' style='color:red'>!First name is required</span>");
            fname++;
        }
        isValid = false;
    } else {
        var el = document.getElementById('fn');
        if (el) {
            el.parentNode.removeChild(fn);
        }
    }
    var lastname = document.getElementById('lastname').value;
    if (lastname == null || lastname == '') {
        if (lname < 1) {
            document.getElementById('lastname').insertAdjacentHTML('afterend', "<span id='ln' style='color:red'>!Last name is required</span>");
            lname++;
        }
        isValid = false;
    } else {
        var el = document.getElementById('ln');
        if (el) {
            el.parentNode.removeChild(ln);
        }
    }
    var email = document.getElementById('email').value;
    if (email == null || email == '') {
        if (emailId < 1) {
            document.getElementById('email').insertAdjacentHTML('afterend', "<span id='eml' style='color:red'>!Email Id not proper</span>");
            emailId++;
        }
        isValid = false;
    } else {
        var el = document.getElementById('eml');
        if (el) {
            el.parentNode.removeChild(eml);
        }
    }
    var organization = document.getElementById('organization').value;
    if (organization == null || organization == '') {
        if (org < 1) {
            document.getElementById('organization').insertAdjacentHTML('afterend', "<span id='orgn' style='color:red'>!Organization name required</span>");
            org++;
        }
        isValid = false;
    } else {
        var el = document.getElementById('orgn');
        if (el) {
            el.parentNode.removeChild(orgn);
        }
    }
	
	var phone = document.getElementById('phone').value;
    if (phone == null || phone == '') {
        if (phNo < 1) {
            document.getElementById('phone').insertAdjacentHTML('afterend', "<span id='phn' style='color:red'>!Phone No is required</span>");
            phNo++;
        }
        isValid = false;
    } else {
        var el = document.getElementById('phn');
        if (el) {
            el.parentNode.removeChild(phn);
        }
    }
    if (document.getElementById('r1').checked) {
        var gender = document.getElementById('r1').value;
    } else {
        var gender = document.getElementById('r2').value;
    }
    if (r1.checked == false && r2.checked == false) {
        if (genderId < 1) {
            document.getElementById('genders').insertAdjacentHTML('beforeend', "<span id='gend' style='color:red'>!Atleast select 1 gender</span>");
            genderId++;
        }
        isValid = false;
    } else if (r1.checked) {
        var el = document.getElementById('gend');
        if (el) {
            el.parentNode.removeChild(el);
        }
    } else {
        var el = document.getElementById('gend');
        if (el) {
            el.parentNode.removeChild(el);
        }
    }
    if (isValid == false) {
        return false;
    }
	
    var userObj = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        organization: organization,
		phone: phone,
        gender: gender
    };
	console.log(userObj);
	
    users.push(userObj);
    
    getData(userObj);
    
	localStorage.setItem('users', JSON.stringify(users));
    userForm.reset();
}

function getData(userObj) {
    var html = '<tr>';
	
	for(key in userObj){
	
	if(userObj.hasOwnProperty(key)){
		console.log(userObj[key]);
		
		html += '<td>'+userObj[key]+'</td>';
	}
}
   
    document.getElementById('tbl_rows').insertAdjacentHTML('afterend', html);
}