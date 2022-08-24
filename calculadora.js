const readline = require ('readline-sync');
const calculadora = () => {
    var n1 = Number(readline.question('digite o primeiro numero: '));
    var n2 = Number(readline.question('digite o segundo numero: '));
    var oper = readline.question('digite qual operacao voce deseja realizar: \n [+] \n [-] \n [*] \n [/] \n');
    var res
    var resto
    
        if (oper == '+') {
            res = n1 + n2;
            return console.log(res)
        }
         if (oper == '-') {
            res = n1 - n2;
            return console.log(res)
        }
         if (oper == '*') {
            res = n1 * n2;
            return console.log(res)
        }
         if (oper == '/') {
            if(n2 == 0) {
                console.log('erro')
            }
            else {
                res = n1 / n2;
                return console.log(res)
                if (n1 > n2) {
                    resto = n1 % n2;
                }
                else {
                    resto = 0;
                }
            }
        }
        else {
            console.log('digite um operardor válido')
        }
    }

calculadora(); 
