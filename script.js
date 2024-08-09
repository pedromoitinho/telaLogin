let inputname = $("#name");
let userpassword = [];
let inputpassword = $("#senha");
let login = $("#login");
let names = ["pedro"];
let senhas = ["bolas123"];

login.on("click", function(){
    if(names.includes(inputname.val().toLowerCase()) && senhas.includes(inputpassword.val().toLowerCase())){
        alert("Login bem sucedido");
    }
    else{
        alert("Crie sua conta antes");
    }
})
$("document").on("keydown", function(keypressed){
    if (keypressed.keyCode == 38){
        if(names.includes(inputname.val().toLowerCase()) && senhas.includes(inputpassword.val().toLowerCase())){
            alert("Login bem sucedido");
        }
        else{
            alert("Crie sua conta antes");
        }
    }
})