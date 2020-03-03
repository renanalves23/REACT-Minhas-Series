import React, { useState } from 'react'


const NovoGenero = () => {
  return(
    <div className="container">
      <h1>Novo Gênero</h1>
      <form>
          <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" className="form-control" id="name" placeholder='Nome do Gênero' />
      </div>
      <button type="button" className="btn btn-primary">Salvar</button>
      </form>
    </div>
  )
}

export default NovoGenero