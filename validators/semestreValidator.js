const semestreValidator = {
    nome: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 3,
            message: 'A quantidade de caracteres mínima é 3'
        },
        maxLength: {
            value: 50,
            message: 'A quantidade de caracteres máxima é 50'
        }
    },
    dataInicio: {
        required: 'O campo é obrigatório'
    },
    dataFim: {
        required: 'O campo é obrigatório'
    }
}

export default semestreValidator