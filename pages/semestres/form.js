import Pagina from "@/components/Pagina";
import semestreValidator from "@/validators/semestreValidator";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiOutlineCheck } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import { mask } from "remask";

const form = () => {
  const { push } = useRouter();

  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  function salvar(dados) {
    axios.post('/api/semestres', dados)
    push("/semestres");
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')

    setValue(name, mask(value, mascara))
  }

  return (
    <Pagina titulo="Semestres">
      <Form>
      <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" {...register("nome", semestreValidator.nome)} />
          {
            errors.nome &&
            <small>{errors.nome.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="dataInicio">
          <Form.Label>Data de Início</Form.Label>
          <Form.Control type="text" mask='99/99/9999' {...register("dataInicio", semestreValidator.dataInicio)} onChange={handleChange} />
          {
            errors.dataInicio &&
            <small>{errors.dataInicio.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="dataFim">
          <Form.Label>Data de Fim</Form.Label>
          <Form.Control type="text" mask='99/99/9999' {...register("dataFim", semestreValidator.dataFim)} onChange={handleChange} />
          {
            errors.dataFim &&
            <small>{errors.dataFim.message}</small>
          }
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
