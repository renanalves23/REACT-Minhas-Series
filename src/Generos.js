import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Generos = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('/api/genres').then(res => {
      setData(res.data.data)
    })
  }, [])
//
  return (
    <div>
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
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td></td>
              </tr>
            </tbody>
        </table>
       <pre>{JSON.stringify(data)}</pre>
    </div>
    )
}

export default Generos