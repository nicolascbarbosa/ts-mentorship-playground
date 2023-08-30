const ObjetoCasa = {
    cor: 'branca',
    proprietario: 'João',
    moradores: ['João', 'Maria', 'José'],
    valor: 100000,
    endereco: {
        id: 1,
        rua: 'Rua 1',
        numero: 123,
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '12345-678',
        pais: 'Brasil',
    },
    novoMorador: function (nome: string) {
        // ANTES moradores: ['João', 'Maria', 'José'],

        this.moradores.push(nome);

        // DEPOIS moradores: ['João', 'Maria', 'José', 'Letícia'],
    }
}

/* TODO objeto tem propriedades.
    propriedades são características do objeto.
    propriedades são formadas por chave e valor.
    chave é o nome da propriedade.
    valor é o valor da propriedade.

    Propriedades podem ser de qualquer tipo. String, Number, Object, Array, etc.

    IMPORTANTE: Propriedades podem ser Atributos ou Métodos.
*/

const ObjetoCarro = {
    id: 1,
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2010,
    cor: 'branco',
    placa: 'ABC-1234',
}

const ObjetoCliente = {
    id: 1,
    nome: 'João',
    cpf: '123.456.789-00',
    dataNascimento: '1990-01-01',
    endereco: 'Rua 1, 123',
}