import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

const index = () => {
  const [semestres, setSemestres] = useState([]);

  useEffect(() => {
    axios.get("/api/semestres").then((resultado) => {
      setSemestres(resultado.data);
    });
  }, []);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/semestres").then((resultado) => {
      setSemestres(resultado.data);
    });
  }

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      axios.delete("/api/semestres/" + id);
      getAll();
    }
  }

  return (
    <Pagina titulo="Semestres">
      <Link href={"/semestres/form"} className="btn btn-primary mb-3">
        Novo
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Data de Início</th>
            <th>Data de Fim</th>
          </tr>
        </thead>
        <tbody>
          {semestres.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={"/semestres/" + item.id}>
                  <BsFillPencilFill className="me-2 text-primary" />
                </Link>
                <AiOutlineDelete
                  onClick={() => excluir(item.id)}
                  className="text-danger"
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.dataInicio}</td>
              <td>{item.dataFim}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
