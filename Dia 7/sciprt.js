//Ejemplo con AJAX
function getDataFromAPI(){
    fetch('link de la api')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
}
getDataFromAPI();

//API github
document.getElementById('button2').addEventListener('click', obtenerjson);
function getDatafromAPI(){
    fetch('link de la api')
    .then(res=>res.json[0])
    .then(data=>{
        console.log(data);
        let output='';
        data.forEach(function(user){
            output +=`<li>$(user.login)</li>`
        });
        document.getElementById('output').innerHTML=output;
    });
}

//Ejemplo XMLHTTPRequest
function fetchAPI(){
    let xhr =new XMLHttpRequest();
    let url ='linl de la api';
    xhr.open('GET', url.true);
    xhr.onreadystatechange=function(){
        if(this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log('Este es XML:' +response);
        }
        else{
            console.log("Hubo un error:")
        }
    }
    xhr.send();
}