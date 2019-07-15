import React, {Component} from 'react';
import DataPessoas from '../../../service/DataPessoas.js';
import './ListaPessoa.css';
import './instrucaoApp.css'
import '../../../index.css';
import './ListaPessoa.css';

const INSTRUCTOR = 'Andrew';

class PessoaId extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            pessoa: [],
            message: null 
        }
        this.refreshPes = this.refreshPes.bind(this)
    }

    componentDidMount () {
        this.refreshPes();
    }

    refreshPes () {

        DataPessoas.retrievePessoas(INSTRUCTOR, this.state.id)
            .then(
                response => {
                    console.log(response.data);
                    this.setState( {pessoa: response.data} );
                }
            )
    }

    render() {
        return (
            <div className="conteudo">
                <h3> Pessoa </h3> 
                {this.state.message && <div class="alert alert-sucess">{this.state.message} </div>}
                <div className="conteudo">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th> Nome </th>
                                <th> Descricao </th>
                            </tr>
                        </thead>
                        <tr>
                            <td> {this.state.pessoa.id} </td>
                            <td> {this.state.pessoa.nome}</td>
                            <td> {this.state.pessoa.descricao}</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default PessoaId;