import Pagina from "@/components/Pagina";
import disciplinaValidator from "@/validators/disciplinaValidator";
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
    axios.post('/api/disciplinas', dados)
    push("/disciplinas");
  }

  return (
    <Pagina titulo="Disciplinas">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" {...register("nome", disciplinaValidator.nome)} />
          {
            errors.nome &&
            <small>{errors.nome.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>Curso</Form.Label>
          <Form.Control type="text" {...register("curso", disciplinaValidator.curso)} />
          {
            errors.curso &&
            <small>{errors.curso.message}</small>
          }
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <AiOutlineCheck className="me-1" />
            Salvar
          </Button>
          <Link href={'/disciplinas'} className="ms-2 btn btn-danger">
            <IoMdArrowRoundBack className="me-1" />Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
