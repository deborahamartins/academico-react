const alunoValidator = {
    nome: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 3,
            message: 'A quantidade de caracteres mínima é 3'
        },
        maxLength: {
            value: 255,
            message: 'A quantidade de caracteres máxima é 255'
        }
    },
    cpf: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 255,
            message: 'A quantidade de caracteres máxima é 255'
        }
    },
    matricula: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 255,
            message: 'A quantidade de caracteres máxima é 255'
        }
    },
     email: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 10,
            message: 'A quantidade de caracteres mínima é 10'
        },
        maxLength: {
            value: 255,
            message: 'A quantidade de caracteres máxima é 255'
        }
    },
     telefone: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 8,
            message: 'A quantidade de caracteres mínima é 8'
        },
        maxLength: {
            value: 255,
            message: 'A quantidade de caracteres máxima é 255'
        }
    },
     cep: {
        minLength: {
            value: 5,
            message: 'A quantidade de caracteres mínima é 5'
        },
        maxLength: {
            value: 255,
            message: 'A quantidade de caracteres máxima é 255'
        }
    },
     logradouro: {
        minLength: {
            value: 5,
            message: 'A quantidade de caracteres mínima é 5'
        },
        maxLength: {
            value: 255,
            message: 'A quantidade de caracteres máxima é 255'
        }
    },
     complemento: {
        minLength: {
            value: 5,
            message: 'A quantidade de caracteres mínima é 5'
        },
        maxLength: {
            value: 255,
            message: 'A quantidade de caracteres máxima é 255'
        }
    },
    numero: {
        maxLength: {
            value: 255,
            message: 'A quantidade de caracteres máxima é 255'
        },
        min: {
            value: 1,
            message: 'O valor mínimo é 1'
        }
    },
    bairro: {
        minLength: {
            value: 5,
            message: 'A quantidade de caracteres mínima é 5'
        },
        maxLength: {
            value: 255,
            message: 'A quantidade de caracteres máxima é 255'
        }
    },
}

export default alunoValidator