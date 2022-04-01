import React, { Component } from 'react';
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from './components/ListaDeCategorias';
import Categorias from './dados/Categorias';
import ArrayNotas from './dados/Notas';


export default class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayNotas();
  }

  render() {
    return (
      <section>
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)} />
        <main>
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias} />
          <ListaDeNotas
            notas={this.notas}
            apagarNota={this.notas.apagarNota.bind(this.notas)} />
        </main>
      </section>
    )
  }
}


