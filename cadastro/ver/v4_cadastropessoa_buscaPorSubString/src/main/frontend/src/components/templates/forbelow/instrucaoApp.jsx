import React, { Component } from 'react';
import ListaPessoas from './ListaPessoas';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PessoasComponent from '../../../service/PessoaComponent';
import pessoaId from './PessoaId';

class instrucaoApp extends Component {
   
    render() {
        return (
            <Router history={this.history}>
                <>
                    <h1> Menu pessoas </h1>    
                    <Switch>
                        <Route path="/" exact component={ListaPessoas}/>
                        <Route path="/pessoas" exact component={ListaPessoas}/>
                        <Route path="/pessoa/:id" component={pessoaId}/>
                        <Route path="/pessoas/:id" component={PessoasComponent}/>
                    </Switch>
                </>
            </Router>
            
        )
    }
}

export default instrucaoApp;