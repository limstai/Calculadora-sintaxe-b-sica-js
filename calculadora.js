function calculadora (){
    const operacao = Number(prompt('Escolha uma operação:\n1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**) ')); //entrada dos dados colocada pelo usuario

    if (!operacao || operacao >= 7) {       //aqui verifica se operação é diferente do tipo número ou maior ou igual a 7 e emite a msg e volta pro inicio.
        alert('ERRO - Operação inválida');
        calculadora();
    } else {                                //caso a opção seja válida ele continua normalmente.
        let n1 = Number(prompt('Inserir o primeiro valor: '));
        let n2 = Number(prompt('Inserir o segundo valor: '));
        let resultado;

        //verificação das váriaveis, verificar se elas são válidas também.
        if (!n1) {
            alert(`ERRO - valor inserido incorreto, inserir apenas números!`)
            calculadora();
        }else if (!n2) {
            alert(`ERRO - valor inserido incorreto, inserir apenas números!`)
            calculadora();
        }else {
           //agora a declaração das funções
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao(); //quando termina um calculo ele vai pra mensagem se você quer ou não fazer uma nova operação.
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao(); //quando termina um calculo ele vai pra mensagem se você quer ou não fazer uma nova operação.
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao(); //quando termina um calculo ele vai pra mensagem se você quer ou não fazer uma nova operação.
            }
            function divisao(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao(); //quando termina um calculo ele vai pra mensagem se você quer ou não fazer uma nova operação.
            }
            function divisaoInteiro(){
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a: ${resultado}`)
                novaOperacao(); //quando termina um calculo ele vai pra mensagem se você quer ou não fazer uma nova operação.
            }
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª é igual a:  ${resultado}`)
                novaOperacao(); //quando termina um calculo ele vai pra mensagem se você quer ou não fazer uma nova operação.
            }
            //nova função para quando o calculo é feito, dai o usuario escolhe se quer continuar ou não.
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
        
                if (opcao == 1) {
                    calculadora();          //caso o usuario escolha o 1 que é sim, volta pro inicio que é function calculadora.
                } else if (opcao == 2) {    //caso o usuario escoolha o 2 que é não, emite a mensagem e encerra a calculadora.
                    alert('Até mais!')
                } else {                    //caso o usiario escolha um número que não seja 1 ou 2 emite a msg e volta pra escolher entre 1 ou 2
                    alert('Opção inválida, inserir um opção válida')
                    novaOperacao();
                }
            }
                //criar um verificador de operações
            switch (operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisao();
                    break;
                case 5: 
                    divisaoInteiro();
                    break;
                case 6: 
                    potenciacao();
                    break;
            }  
        }   
    }
}
calculadora(); 
    