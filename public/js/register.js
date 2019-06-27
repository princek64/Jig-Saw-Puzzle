var socket;
$(document).ready(function () {

    socket=io('/serverClient');
    socket.on('connect', function (data) {
        console.log('index Connected to server..');
    });
});



var request = new XMLHttpRequest();
 
function saveData(){
    let email = document.getElementById('emailp1').value;   
    let name = document.getElementById('namep1').value;
    let company = document.getElementById('company').value;
    var status = validateEmail(emailp1.value);

    if(emailp1.value == '' || namep1.value == '' || company.value == ''){
        if(emailp1.value == ''){
            emailp1.classList.add('b-red');
            Swal.fire({
                title: 'Error!',
                text: 'Enter Email',
                type: 'error',
                confirmButtonText: 'Try Again!'
              })
        }
        else{
            emailp1.classList.remove('b-red');
        }
        if(namep1.value == ''){
            namep1.classList.add('b-red');
            Swal.fire({
                title: 'Error!',
                text: 'Enter Name',
                type: 'error',
                confirmButtonText: 'Try Again!'
              })
        }
        else{
            namep1.classList.remove('b-red');
        }
        if(company.value == ''){
            // company.classList.add('b-red');
            Swal.fire({
                title: 'Error!',
                text: 'Enter Company',
                type: 'error',
                confirmButtonText: 'Try Again!'
              })
        }
        else{
            company.classList.remove('b-red');
        }
    } else if(!status){
        emailp1.classList.add('b-red');
        Swal.fire({
            title: 'Error!',
            text: 'Email Invalid',
            type: 'error',
            confirmButtonText: 'Try Again!'
          })
    }
    else{
        var data=[{
        "name": name,
        "emailp1":email,
        "company":company
        }];

    console.log("data:",data);
    socket.emit('register',data);

    setTimeout(() => {
        window.location.href = "../app.html"
    }, 200);

    }

 
}

function validateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}