import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import TelaPrincipal from '../../views/contents/TelaPrincipal'
import TelaSobre from '../../views/contents/TelaSobre'
import TelaDetalhes from '../../views/contents/TelaDetalhes'


const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/TelaPrincipal">
                <TelaPrincipal />
            </Route>
            <Route path="/TelaSobre">
                <TelaSobre />
            </Route>
            <Route path="/TelaDetalhes">
                <TelaDetalhes />
            </Route>     
        </Switch>
    </main>
)
export default Content
