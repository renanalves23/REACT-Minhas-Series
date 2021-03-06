import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


const NovoGenero = () => {
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)

  const onChange = event =>{
    setName(event.target.value)
  }

  const save = () =>{
    axios.post('/api/genres', {
      name //name:name
    }).then(res => {
      setSuccess(true)
    })
  }

  if(success){
   return <Redirect to='/generos'/>
  }

  return(
    <div className="container">
      <h1>Novo Gênero</h1>
      <form>
      {name}
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" value={name} onChange={onChange} className="form-control" id="name" placeholder='Nome do Gênero' />
      </div>
      <button type="button" onClick={save} className="btn btn-lg btn-primary">Salvar</button>
      </form>
    </div>
  )
}

export default NovoGenero