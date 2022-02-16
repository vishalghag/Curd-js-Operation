document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let qualification = document.getElementById('Desig').value;
    let age = document.getElementById('age').value;
    let salary = document.getElementById('salary').value;
    createUser(name, qualification, age, salary);
})

var users = [];

function createUser(name, qualification, age, salary) {
    var user = {
        name: name,
        qualification: qualification,
        age: age,
        salary: salary,
    }

    users.push(user)
    // console.log(users);
    readUser();
    document.getElementById('form').reset()
}

function readUser() {
    var userhtml = document.getElementById('flex-container')
    userhtml.innerHTML = '';
    for (var i = 0; i < users.length; i++) {
        userhtml.innerHTML += `<div class="flex-items"> <div class="card-image"></div> <tr><th>Name:-</th><td>${users[i].name}</td></tr> <br/> <tr><th>qualification:-</th> <td>${users[i].qualification}</td></tr> <br/>
        <tr><th>age:-</th> <td>${users[i].age}</td></tr> <br/> <tr><th>Salary:-</th> <td>${users[i].salary}</td></tr> <br/> <center> <button class="edited" onClick="editUser('${i}')">Edit User</button> <button class="removed" onClick="deleteUser('${i}')">Delete User</button> </center> </div>
        `
    }
}

function deleteUser(i) {
    users.splice(i, 1);
    readUser();
}

function editUser(index) {

    var userhtml = document.getElementById('flex-container')
    userhtml.innerHTML = '';
    for (var i = 0; i < users.length; i++) {
        if (i == index) {
            userhtml.innerHTML += `<div class="red"> 
        Name: <input type="text" id="input2name" placeholder="${users[i].name}"><br/><br/>
        Qualification: <input type="text" id="input2qualification" placeholder="${users[i].qualification}"><br/><br/>
        Age: <input type="date" id="input2date" placeholder="${users[i].age}" ><br/><br/> 
        Salary: <input type="number" id="input2salary" placeholder="${users[i].salary}" ><br/><br/>
        <button class="edited" onClick="updateUser('${i}')">Update User</button> 
        <button class="removed" onClick="readUser()">Cancel</button> </center> </div>`
        }
        else {
            userhtml.innerHTML += `<div class="flex-items"> <div class="card-image"></div> <tr><th>Name:-</th><td>${users[i].name}</td></tr> <br/> <tr><th>qualification:-</th> <td>${users[i].qualification}</td></tr> <br/>
        <tr><th>age:-</th> <td>${users[i].age}</td></tr> <br/> <tr><th>Salary:-</th> <td>${users[i].salary}</td></tr> <br/> <center> <button class="edited" disabled onClick="editUser('${i}')">Edit User</button> <button class="removed" disabled onClick="deleteUser('${i}')">Delete User</button> </center> </div>
        `
        }

    }

}

function updateUser(index)
{
    var updatename = document.getElementById('input2name').value;
    var updatequalification = document.getElementById('input2qualification').value
    var updateage = document.getElementById('input2date').value;
    var updatesalary = document.getElementById('input2salary').value;

    if(updatename == '' || updatequalification == '' || updateage == '' || updatesalary == '')
    {
        alert("PLZZ FILL COMPLETE INFORMATION");
    }
    else
    {
        users[index].name = updatename;
        users[index].qualification = updatequalification;
        users[index].age = updateage;
        users[index].salary = updatesalary;
        readUser();
    }
}

document.getElementById('btn').addEventListener('click', function()
{
    document.querySelector('.formsData').style.display = 'block'
    document.querySelector('.formData-items').style.display = 'block'
})