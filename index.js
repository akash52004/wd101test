function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;
    var terms = document.getElementById('terms').checked;
    var dobDate = new Date(dob);
    var age = new Date().getFullYear() - dobDate.getFullYear();

    if (age < 18 || age > 55) {
        alert('Age must be between 18 and 55.');
        return;
    }
    if (!terms) {
        alert('Please accept the terms and conditions.');
        return;
    }
    var output = document.getElementById('output');
    output.innerHTML = `<p><strong>Name:</strong> ${name}</p>
                       <p><strong>Email:</strong> ${email}</p>
                       <p><strong>Password:</strong> ${password}</p>
                       <p><strong>Date of Birth:</strong> ${dob}</p>
                       <p><strong>Age:</strong> ${age} years</p>`;
}
