// submit Btn
const submit = document.getElementById('submitBtn');

// Tbody
const tbody = document.querySelector('#table tbody');
// Form Elemets 
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const date = document.getElementById('date');
const gender = document.getElementById('rad1');


// Submit
submit.addEventListener('click', function () {
    const img = document.getElementById('output');

    // check / validation
    if (check()) {
        // insert into table
        let sl = document.querySelectorAll('#table tbody tr').length + 1;

        let tr = `<tr class="sl-${sl}">
                    <td>${sl}</td>
                    <td>${name.value}</td>
                    <td>${email.value}</td>
                    <td>${phone.value}</td>
                    <td>${date.value}</td>
                    <td>${gender.checked? 'male':'female'}</td>
                    <td><img id="rendar" width="100px" src="${img.src}"></td>
                    <td><a href="#" onclick="edit_html(${sl})">Edit</a> <a href="#" onclick="del()">Delete</a></td>
                </tr>`

        // insert into table body
        tbody.innerHTML = tbody.innerHTML + tr;

        // Clear all input
        clear();
    } else {
        alert('Please fill all fields')
    }
})



// clear function
function clear() {
    name.value = '';
    email.value = '';
    phone.value = '';
    date.value = '';
    gender.value = '';
    document.getElementById('output').src = "";
    document.getElementById('image').value = "";

    // document.getElementById('submitBtn').style.display == "block" ?document.getElementById('submitBtn').style.display == "none":null;

    // document.getElementById('more').style.display == "block" ?document.getElementById('submitBtn').style.display == "none":null;
    

}
// check / validation
function check() {
    if (name.value == '') {
        return 0;
    } else {
        return 1;
    }
}


// Edit
// function edit(sl) {
//     console.log(sl)
// }
function edit_html(sl) {

    a = document.querySelector(`.sl-${sl}`)

    document.querySelector(`#name`).value = a.children[1].innerHTML
    document.querySelector(`#email`).value = a.children[2].innerHTML
    document.querySelector(`#phone`).value = a.children[3].innerHTML
    document.querySelector(`#date`).value = a.children[4].innerHTML
    // document.querySelector(`#output`).src = a.children[6].innerHTML.rendar.src

    // a.children[2].innerHTML = document.querySelector(`#email`).value
    
document.getElementById('submitBtn').style.display = "none";

    document.getElementById('more').style.display = "block";
}




function del(e){
    e.target.remove();
}



// img load function

var loadFile = function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('output');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};


// update function
function update(){
  confirm("dhhdh")
}
