import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

const index = () => {
  const [salas, setSalas] = useState([]);

  useEffect(() => {
    axios.get("/api/salas").then((resultado) => {
      setSalas(resultado.data);
    });
  }, []);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/salas").then((resultado) => {
      setSalas(resultado.data);
    });
  }

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      axios.delete("/api/salas/" + id);
      getAll();
    }
  }

  return (
    <Pagina titulo="Salas">
      <Link href={"/salas/form"} className="btn btn-primary mb-3">
        Novo
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Capacidade</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {salas.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={"/salas/" + item.id}>
                  <BsFillPencilFill className="me-2 text-primary" />
                </Link>
                <AiOutlineDelete
                  onClick={() => excluir(item.id)}
                  className="text-danger"
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.capacidade}</td>
              <td>{item.tipo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
