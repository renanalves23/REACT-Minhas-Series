import React, { useState } from 'react'


const NovoGenero = () => {
  const [name, setName] = useState('')

  const onChange = event =>{
    setName(event.target.value)
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
      <button type="button" className="btn btn-lg btn-primary">Salvar</button>
      </form>
    </div>
  )
}

export default NovoGenero