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
    axios.post('/api/semestres', dados)
    push("/semestres");
  }

  return (
    <Pagina titulo="Semestres">
      <Form>
      <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" {...register("nome")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="dataInicio">
          <Form.Label>Data de Início</Form.Label>
          <Form.Control type="date" {...register("dataInicio")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="dataFim">
          <Form.Label>Data de Fim</Form.Label>
          <Form.Control type="date" {...register("dataFim")} />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <AiOutlineCheck className="me-1" />
            Salvar
          </Button>
          <Link href={'/semestres'} className="ms-2 btn btn-danger">
            <IoMdArrowRoundBack className="me-1" />Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
