const professorValidator = {
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
    cpf: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 20,
            message: 'A quantidade de caracteres máxima é 20'
        }
    },
    matricula: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 20,
            message: 'A quantidade de caracteres máxima é 20'
        }
    },
    salario: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 8,
            message: 'A quantidade de caracteres máxima é 8'
        },
        min: {
            value: 500,
            message: 'O valor mínimo é 500'
        }
    },
     email: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 10,
            message: 'A quantidade de caracteres mínima é 10'
        },
        maxLength: {
            value: 100,
            message: 'A quantidade de caracteres máxima é 100'
        }
    },
     telefone: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 8,
            message: 'A quantidade de caracteres mínima é 8'
        },
        maxLength: {
            value: 15,
            message: 'A quantidade de caracteres máxima é 15'
        }
    },
     cep: {
        minLength: {
            value: 5,
            message: 'A quantidade de caracteres mínima é 5'
        },
        maxLength: {
            value: 11,
            message: 'A quantidade de caracteres máxima é 11'
        }
    },
     logradouro: {
        minLength: {
            value: 5,
            message: 'A quantidade de caracteres mínima é 5'
        },
        maxLength: {
            value: 100,
            message: 'A quantidade de caracteres máxima é 100'
        }
    },
     complemento: {
        minLength: {
            value: 5,
            message: 'A quantidade de caracteres mínima é 5'
        },
        maxLength: {
            value: 100,
            message: 'A quantidade de caracteres máxima é 100'
        }
    },
    numero: {
        maxLength: {
            value: 20,
            message: 'A quantidade de caracteres máxima é 20'
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
            value: 100,
            message: 'A quantidade de caracteres máxima é 100'
        }
    },
}

export default professorValidator