document.getElementById('submit').onclick = function(){
    console.log("inside this..")
    var username = document.getElementById('username').value;
    document.getElementById('greet').innerHTML = 'Hello ' + username;
}