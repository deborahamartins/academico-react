import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

const index = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    axios.get("/api/alunos").then((resultado) => {
      setAlunos(resultado.data);
    });
  }, []);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/alunos").then((resultado) => {
      setAlunos(resultado.data);
    });
  }

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      axios.delete("/api/alunos/" + id);
      getAll();
    }
  }

  return (
    <Pagina titulo="Alunos">
      <Link href={"/alunos/form"} className="btn btn-primary mb-3">
        Novo
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Matrícula</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>CEP</th>
            <th>Logradouro</th>
            <th>Complemento</th>
            <th>Número</th>
            <th>Bairro</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={"/alunos/" + item.id}>
                  <BsFillPencilFill className="me-2 text-primary" />
                </Link>
                <AiOutlineDelete
                  onClick={() => excluir(item.id)}
                  className="text-danger"
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.matricula}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
              <td>{item.cep}</td>
              <td>{item.logradouro}</td>
              <td>{item.complemento}</td>
              <td>{item.numero}</td>
              <td>{item.bairro}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
