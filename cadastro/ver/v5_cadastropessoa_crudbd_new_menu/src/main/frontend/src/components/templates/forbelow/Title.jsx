import React, { Component } from 'react';
import './Title.css'
import './bootstrap.css'

class Title extends Component {
    constructor (props) {
        super(props);
        this.state = {
            // id: this.props.match.params.id,
            // palavra: this.props.match.params.palavra,
            pessoas: [],
            message: null 
        }

        this.buscarPessoa = this.buscarPessoa.bind(this)
        this.onChange = this.onChange.bind(this)

        this.buscarPesNome = this.buscarPesNome.bind(this)
        this.onChangedNome = this.onChangedNome.bind(this)

        this.adicionaPessoaClicked = this.adicionaPessoaClicked.bind(this)
    }


    onChange = (event) => {
        this.setState({ id: event.target.value});
    }

    buscarPessoa = (event) => {
        this.setState({ id: event.target.value});
        console.log("id: " + this.state.id)

        if (this.state.id <= -1) {
            alert("Id inexistente")
        } else {

            this.props.history.push(`/pessoa/${this.state.id}`)
        }
    }

    onChangedNome = (event) => {
        this.setState({ palavra: event.target.value});
        console.log("palavra1: " + this.state.palavra)
    }

    buscarPesNome = (event) => {
        this.setState({ palavra: event.target.value});
        console.log("palavra2: " + this.state.palavra)

        if ((this.state.palavra === " ") || (this.state.palavra === undefined )) {
            alert("Id inexistente")
        } else {

            this.props.history.push(`/pes/nome/${this.state.palavra}`)
        }
    }

    adicionaPessoaClicked () {
        this.props.history.push(`/pessoas/-1`)
    }

    render() {
        return (
            <div className="context">
                <h3> Tela Inicial </h3> 
                <br/>
                <table>
                    <thead>
                            <tr>
                                <th>Busca pelo ID : </th>
                                <th>  <div  id="aliTela" class="btn-group btn-group-toggle" data-toggle="buttons">
                                        <input  type="number" placeholder="Digite um id" onChange={this.onChange} value={this.state.id} />
                                        <label class="btn btn-secondary active">
                                            <input type="radio" name="options" id="option1" autocomplete="off" onClick={this.buscarPessoa} value="submit" checked/><i class="fa fa-search" aria-hidden="true" ></i>
                                        </label>
                                    </div> 
                                </th>
                            </tr>
                    </thead>
                    <br/> <br/>

                    <thead>
                        <tr>
                            <th>
                                <td> Busca pelo nome : </td>
                            </th>
                            <div className="alinha">
                                <form>
                                    <input type="search" class="form-control ds-input"  onChange={this.onChangedNome} value={this.state.palavra}/>
                                    <input type="submit"  id="option1" autocomplete="off" onClick={this.buscarPesNome} value="submeter" checked/>
                                </form>
                            </div>
                            
                        </tr>
                    </thead>

                </table>
                <br/> <br/>

                <div className="alinhamento"> 
                    <button className="btn btn-danger">  <a href='/pessoas'> listar Pessoas </a> </button> 
                </div>
                <div className="alinhamentoAdc"> 
                    <button class="btn btn-success" onClick={this.adicionaPessoaClicked}> Adicionar </button>
                </div>
            </div>
        );
    }
}

export default Title;