import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Generos = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('/api/genres').then(res => {
      setData(res.data.data)
    })
  }, [])

  const renderizaLinha = record => {
    return (
      <tr key={record.id}>
        <th scope="row">{record.id}</th>
        <td>{record.name}</td>
        <td><button>+</button></td>
      </tr>
    )
  }

  if(data.length === 0) {
    return (
      <div className="container">
        <h1>Gêneros</h1>
        <div className="alert alert-warning" role="alert">
           Você não possui gêneros criados!
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
       <h1 path='/api/genres'>Generos</h1>
       <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Açoes</th>
              </tr>
            </thead>
            <tbody>
              {data.map(renderizaLinha)}
            </tbody>
        </table>
       <pre>{JSON.stringify(data)}</pre>
    </div>
    )
}

export default Generos