import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

const index = () => {
  const [disciplinas, setDisciplinas] = useState([])

  useEffect(() => {
    axios.get('/api/disciplinas').then(resultado => {
      setDisciplinas(resultado.data)
    })
  }, [])

 
  
  function excluir(id){
    if (confirm('Deseja realmente excluir o registro?')){
    const disciplinas = getAll()
    disciplinas.splice(id, 1)
    window.localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
    setDisciplinas(disciplinas)
  }
}
  
  return (
    <Pagina titulo="Disciplinas">
      <Link href={"/disciplinas/form"} className="btn btn-primary mb-3">
        Novo
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Curso</th>
          </tr>
        </thead>
        <tbody>
            {disciplinas.map((item, i) => (
              <tr key={i}>
                <td>
                  <Link href={'/disciplinas/' + i}>
                    <BsFillPencilFill className='me-2 text-primary' />
                  </Link>                  
                  <AiOutlineDelete onClick={() => excluir (index)} className='text-danger'/>
                </td>
              <td>{item.nome}</td>
              <td>{item.curso}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
