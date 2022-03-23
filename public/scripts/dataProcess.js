const User = require('../../models/user')

var username  = document.getElementById('username')
var firstname = document.getElementById('firstname')
var lastname  = document.getElementById('lastname')

async function addUser() {
    const user = new User(
        {
            username: username,
            firstname: firstname,
            lastname: lastname,
        }
    )

    const createdUser = await user.save();
}

var form = document.getElementById("data-entry");
document.getElementById("form-submit").addEventListener("click", () => {
    console.log('reached form submission!')
    form.submit();
});

console.log('reached!');