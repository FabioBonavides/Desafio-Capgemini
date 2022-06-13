var senha = '___';
let resultado;


if ((senha.length == 1) && (((senha.match(/[A-Z]/) || senha.match(/[a-z]/)) ||
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) || (senha.match(/[0-9]/))))))) {
    resultado = 5
}
else if ((senha.length == 2) && (((senha.match(/[A-Z]/) || senha.match(/[a-z]/)) ||
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) || (senha.match(/[0-9]/))))))) {
    resultado = 4
}
else if ((senha.length == 3) && (((senha.match(/[A-Z]/) || senha.match(/[a-z]/)) ||
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) || (senha.match(/[0-9]/))))))) {
    resultado = 3
}
else if ((senha.length == 4) && (((senha.match(/[A-Z]/) || senha.match(/[a-z]/)) &&
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) || (senha.match(/[0-9]/))))))) {
    resultado = 2
}
else if ((senha.length == 4) && (((senha.match(/[A-Z]/) || senha.match(/[a-z]/)) &&
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) && (senha.match(/[0-9]/))))))) {
    resultado = 2
}
else if ((senha.length == 4) && (((senha.match(/[A-Z]/) && senha.match(/[a-z]/)) &&
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) || (senha.match(/[0-9]/))))))) {
    resultado = 2
}
else if ((senha.length == 4) && (((senha.match(/[A-Z]/) && senha.match(/[a-z]/)) ||
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) && (senha.match(/[0-9]/))))))) {
    resultado = 2
}
else if ((senha.length == 4) && (((senha.match(/[A-Z]/) || senha.match(/[a-z]/)) ||
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) || (senha.match(/[0-9]/))))))) {
    resultado = 3
}
else if ((senha.length == 5) && (((senha.match(/[A-Z]/) && senha.match(/[a-z]/)) &&
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) && (senha.match(/[0-9]/))))))) {
    resultado = 1
}
else if ((senha.length == 5) && (((senha.match(/[A-Z]/) && senha.match(/[a-z]/)) &&
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) || (senha.match(/[0-9]/))))))) {
    resultado = 1
}
else if ((senha.length == 5) && (((senha.match(/[A-Z]/) || senha.match(/[a-z]/)) &&
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) && (senha.match(/[0-9]/))))))) {
    resultado = 1
}
else if ((senha.length == 5) && (((senha.match(/[A-Z]/) && senha.match(/[a-z]/)) ||
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) && (senha.match(/[0-9]/))))))) {
    resultado = 2
}
else if ((senha.length == 5) && (((senha.match(/[A-Z]/) || senha.match(/[a-z]/)) &&
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) || (senha.match(/[0-9]/))))))) {
    resultado = 2
}
else if ((senha.length == 5) && (((senha.match(/[A-Z]/) || senha.match(/[a-z]/)) ||
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) || (senha.match(/[0-9]/))))))) {
    resultado = 3
}
else if ((senha.length == 6) && (((senha.match(/[A-Z]/) && senha.match(/[a-z]/)) &&
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) && (senha.match(/[0-9]/))))))) {
    resultado = 0
}
else if ((senha.length = 6) && (((senha.match(/[A-Z]/) && senha.match(/[a-z]/)) &&
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) || (senha.match(/[0-9]/))))))) {
    resultado = 1
}
else if ((senha.length = 6) && (((senha.match(/[A-Z]/) || senha.match(/[a-z]/)) &&
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) && (senha.match(/[0-9]/))))))) {
    resultado = 1
    }
else if ((senha.length == 6) && (((senha.match(/[A-Z]/) && senha.match(/[a-z]/)) ||
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) && (senha.match(/[0-9]/))))))) {
    resultado = 2
}
else if ((senha.length == 6) && (((senha.match(/[A-Z]/) || senha.match(/[a-z]/)) &&
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) || (senha.match(/[0-9]/))))))) {
    resultado = 2
}
else if ((senha.length > 6) && (((senha.match(/[A-Z]/) && senha.match(/[a-z]/)) &&
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) && (senha.match(/[0-9]/))))))) {
    resultado = 0
}
else if ((senha.length > 6) && (((senha.match(/[A-Z]/) && senha.match(/[a-z]/)) &&
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) || (senha.match(/[0-9]/))))))) {
    resultado = 1
}
else if ((senha.length > 6) && (((senha.match(/[A-Z]/) || senha.match(/[a-z]/)) &&
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) && (senha.match(/[0-9]/))))))) {
    resultado = 1
}
else if ((senha.length > 6) && (((senha.match(/[A-Z]/) || senha.match(/[a-z]/)) &&
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) || (senha.match(/[0-9]/))))))) {
    resultado = 2
}
else if ((senha.length > 6) && (((senha.match(/[A-Z]/) && senha.match(/[a-z]/)) ||
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) && (senha.match(/[0-9]/))))))) {
    resultado = 2
}
else if ((senha.length > 6) && (((senha.match(/[A-Z]/) || senha.match(/[a-z]/)) ||
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) || (senha.match(/[0-9]/))))))) {
    resultado = 3
}
else if ((senha.length = 6) && (((senha.match(/[A-Z]/) || senha.match(/[a-z]/)) ||
    (((senha.match(/[!,@,#,$,%,^,&,*,(,),-,+]/)) || (senha.match(/[0-9]/))))))) {
    resultado = 3
}
else {
    resultado = "Senha não atende aos parâmetros, Tente Novamente!"
}

console.log(resultado)
