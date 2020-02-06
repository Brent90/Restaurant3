//make sure form only shows when javascript is enabled
document.getElementById('form-holder').style.display = 'block';



function validateForm() {
    document.getElementById('valid-form').style.display = 'none';


    // get ids from input
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');

    //get ids for error warning text
    let nameError = document.getElementById('name-error');
    let emailError = document.getElementById('email-error');
    let phoneError = document.getElementById('phone-error');
    let contactError = document.getElementById('contact-error');
    let invalidEmailError = document.getElementById('invalid-email-error');
    let invalidPhoneError = document.getElementById('invalid-phone-error');


    //get checkbox ids
    let monday = document.getElementById('monday');
    let tuesday = document.getElementById('tuesday');
    let wednesday = document.getElementById('wednesday');
    let thursday = document.getElementById('thursday');
    let friday = document.getElementById('friday');

    //use boolean to make error display dynamic
    let error = false;

    //validate name
    if(name.value.trim() == '' || name.value == null) {
        nameError.style.display = 'block';
        name.style.border = '2px solid red';
        error = true;
    }else{
        nameError.style.display = 'none';
        name.style.border = 'none';
    }

    //validate email
    if(email.value.trim() == '' || email.value == null) {
        emailError.style.display = 'block';
        invalidEmailError.style.display = 'none';
        email.style.border = '2px solid red';
        error = true;
    }else if(!isValidEmail(email.value.trim())) {
        invalidEmailError.style.display = 'block';
        emailError.style.display = 'none';
        email.style.border = '2px solid red';
        error = true;
    }else{
        emailError.style.display = 'none';
        invalidEmailError.style.display = 'none';
        email.style.border = 'none';
    }

    //validate phone
    if(phone.value.trim() == '' || phone.value == null) {
        phoneError.style.display = 'block';
        invalidPhoneError.style.display = 'none';
        phone.style.border = '2px solid red';
        error = true;
    }else if(!isValidPhone(phone.value)) {
        invalidPhoneError.style.display = 'block';
        phoneError.style.display = 'none';
        phone.style.border = '2px solid red';
        error = true;
    }else{
        phoneError.style.display = 'none';
        invalidPhoneError.style.display = 'none';
        phone.style.border = 'none';
    }



    //validate best contact time
    if(!monday.checked && !tuesday.checked && !wednesday.checked && !thursday.checked && !friday.checked)  {
        contactError.style.display = 'block';
        error = true;
    }else{
        contactError.style.display = 'none';
    }

    //if form has errors don't submit
    if(error) {
        return false;
    }else{
        document.getElementById('valid-form').style.display = 'block';
        document.getElementById('contact-form').reset();
        return false;
    }


}

function isValidEmail (email) {
    var emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email)
  }

function isValidPhone(phone) {
    var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return phoneNumberPattern.test(phone);

}


