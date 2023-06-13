const salaValidator = {
    nome: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 2,
            message: 'A quantidade de caracteres mínima é 2'
        },
        maxLength: {
            value: 50,
            message: 'A quantidade de caracteres máxima é 50'
        }
    },
    capacidade: {
        maxLength: {
            value: 2,
            message: 'A quantidade de caracteres máxima é 2'
        },
        min: {
            value: 5,
            message: 'O valor mínimo é 5'
        }, 
        max: {
            value: 99,
            message: 'O valor máximo é 99'
        }
    },
    tipo: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 1,
            message: 'A quantidade de caracteres máxima é 1'
        }
    }
}

export default salaValidator