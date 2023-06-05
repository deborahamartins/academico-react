import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiOutlineCheck } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";

const form = () => {
  const { push } = useRouter();

  const { register, handleSubmit } = useForm();

  function salvar(dados) {
    axios.post('/api/alunos', dados)
    push("/alunos");
  }

  return (
    <Pagina titulo="Alunos">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" {...register("nome")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="number" {...register("cpf")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matrícula</Form.Label>
          <Form.Control type="text" {...register("matricula")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="text" {...register("email")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="text" {...register("telefone")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>CEP</Form.Label>
          <Form.Control type="number" {...register("cep")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro</Form.Label>
          <Form.Control type="text" {...register("logradouro")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento</Form.Label>
          <Form.Control type="text" {...register("complemento")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Número</Form.Label>
          <Form.Control type="number" {...register("numero")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro</Form.Label>
          <Form.Control type="text" {...register("bairro")} />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <AiOutlineCheck className="me-1" />
            Salvar
          </Button>
          <Link href={'/alunos'} className="ms-2 btn btn-danger">
            <IoMdArrowRoundBack className="me-1" />Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
