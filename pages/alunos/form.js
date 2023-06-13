import Pagina from "@/components/Pagina";
import alunoValidator from "@/validators/alunoValidator";
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

  const { register, handleSubmit, formState: { errors } } = useForm();

  function salvar(dados) {
    axios.post('/api/alunos', dados)
    push("/alunos");
  }

  return (
    <Pagina titulo="Alunos">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" {...register("nome", alunoValidator.nome)} />
          {
            errors.nome &&
            <small>{errors.nome.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="number" {...register("cpf", alunoValidator.cpf)} />
          {
            errors.cpf &&
            <small>{errors.cpf.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matrícula</Form.Label>
          <Form.Control type="text" {...register("matricula", alunoValidator.matricula)} />
          {
            errors.matricula &&
            <small>{errors.matricula.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="text" {...register("email", alunoValidator.email)} />
          {
            errors.email &&
            <small>{errors.email.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="text" {...register("telefone", alunoValidator.telefone)} />
          {
            errors.telefone &&
            <small>{errors.telefone.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>CEP</Form.Label>
          <Form.Control type="number" {...register("cep", alunoValidator.cep)} />
          {
            errors.cep &&
            <small>{errors.cep.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro</Form.Label>
          <Form.Control type="text" {...register("logradouro", alunoValidator.logradouro)} />
          {
            errors.logradouro &&
            <small>{errors.logradouro.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento</Form.Label>
          <Form.Control type="text" {...register("complemento", alunoValidator.complemento)} />
          {
            errors.complemento &&
            <small>{errors.complemento.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Número</Form.Label>
          <Form.Control type="number" {...register("numero", alunoValidator.numero)} />
          {
            errors.numero &&
            <small>{errors.numero.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro</Form.Label>
          <Form.Control type="text" {...register("bairro", alunoValidator.bairro)} />
          {
            errors.bairro &&
            <small>{errors.bairro.message}</small>
          }
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
