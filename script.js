function SendMail(){
    var params = {
        name: document.getElementById("name").value,
        emai: document.getElementById("email").value,
        message: document.getElementById("message").value,
    } ;

    const serviceID = "service_we6cfqt";
    const templateID = "template_m3vvkfk";

    emailjs.send(serviceID,templateID,params).then(function(res){
            alert("Email sent" + res.status);
        }
    )
}

