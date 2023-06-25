function formValidation()
{
var uname = document.form1.nombre;
var uphone = document.form1.telefono;
var uemail = document.form1.email;
var umess = document.form1.mensaje;


	    if(allLetter(uname))
          {
            if(ValidateEmail(uemail))
               {
                if(allnumeric(uphone))
                    {
                      if(alphanumeric(umess))
                         {
window.alert("Su consulta ha sido enviada. Respoonderemos a la brevedad. Gracias!")
}
}
}
}	

return false;
}

function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Ingrese su nombre por favor.');
uname.focus();
return false;
}
}

function alphanumeric(umess)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(umess.value.match(letters))
{
return true;
}
else
{
alert('Por favor ingrese su consulta para que podamos asesorarlo');
umess.focus();
return false;
}
}

function allnumeric(uphone)
 { 
      var numbers = /^[0-9]+$/;
       if(uphone.value.match(numbers))
          {
            return true;
           }
       else
            {
             alert('Por favor ingrese un número telefónico al cual podamos contactarlo.');
             uphone.focus();
             return false;
             }
   }


function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("Por favor indicar una dirección de e-mail a donde podamos responder tu consulta.");
uemail.focus();
return false;
}
}
