let jogador1 = {
    id: 1,
    vitorias: 0,
    escolha: "",
    recebeEscolha: function() {
        let select = document.getElementById('escolha');
        let value = select.options[select.selectedIndex].value;
        console.log(value);
        this.escolha = value; //retorna string
    }
}
let jogador2 = {
    id: 2,
    vitorias: 0,
    escolha: "",
    geraEscolha: function() {

        let escolhaRandom = Math.floor(Math.random() * 3);
        //console.log(escolhaRandom);
        this.escolha = escolhaRandom;
    },
    trataEscolha: function() {
        if (this.escolha == 0) {
            this.escolha = "Pedra";
        } else if (this.escolha == 1) {
            this.escolha = "Papel";
        } else if (this.escolha == 2) {
            this.escolha = "Tesoura";
        } else {
            console.log("ERRO");
        }
        console.log(this.escolha);
    }

}

let jokenpo = {
    vencedor: "",
    jogar: function() {
        jogador1.recebeEscolha();
        jogador2.geraEscolha();
        jogador2.trataEscolha();
        let resultado = this.defineResultado();
        this.vencedor = resultado;
        console.log(this.vencedor);
        if (this.vencedor == "Jogador 1") {
            jogador1.vitorias += 1;
        } else if (this.vencedor == "Jogador 2") {
            jogador2.vitorias += 1;
        }
        this.imprimir();
        placar.salvar();
        //console.log("Jogador 1:" + jogador1.vitorias);
        //console.log("Jogador 2:" + jogador2.vitorias);
    },
    imprimir: function() {
        document.getElementById('pontosJogador1').innerText = jogador1.vitorias;
        document.getElementById('pontosJogador2').innerText = jogador2.vitorias;

    },

    defineResultado: function() {
        if (jogador1.escolha == "Pedra" && jogador2.escolha == "Pedra") {
            return "Empate";
        } else if (jogador1.escolha == "Papel" && jogador2.escolha == "Papel") {
            return "Empate";
        } else if (jogador1.escolha == "Tesoura" && jogador2.escolha == "Tesoura") {
            return "Empate";
        } else if (jogador1.escolha == "Pedra" && jogador2.escolha == "Tesoura") {
            return "Jogador 1";
        } else if (jogador1.escolha == "Papel" && jogador2.escolha == "Pedra") {
            return "Jogador 1";
        } else if (jogador1.escolha == "Tesoura" && jogador2.escolha == "Papel") {
            return "Jogador 1";
        } else if (jogador2.escolha == "Pedra" && jogador1.escolha == "Tesoura") {
            return "Jogador 2";
        } else if (jogador2.escolha == "Papel" && jogador1.escolha == "Pedra") {
            return "Jogador 2";
        } else if (jogador2.escolha == "Tesoura" && jogador1.escolha == "Papel") {
            return "Jogador 2";
        }
    }

}

let placar = {
    tabela: [],

    salvar: function() {

        let jogador1Escolha = jogador1.escolha;
        let jogador2Escolha = jogador2.escolha;
        let vencedor = jokenpo.vencedor;

        let tabelaDeJogos = {
            id: this.tabela.length,
            escolha1: jogador1Escolha,
            escolha2: jogador2Escolha,
            resultado: vencedor
        }
        this.tabela.push(tabelaDeJogos);
        this.atualizaTable();
    },
    atualizaTable: function() {

        let table = document.getElementById('tabela').getElementsByTagName('tbody')[0];
        table.innerHTML = '';
        let j = 0;
        for (let i = this.tabela.length - 1; i > -1; i--) {
            let linha = `<tr>
                            <td>${this.tabela[i].escolha1}</td>
                            <td>${this.tabela[i].escolha2}</td>
                            <td>${this.tabela[i].resultado}</td>
                        </tr>`;
            table.innerHTML += linha;
            j++;
            if (j > 9) {
                break;
            }
        }

    }


};