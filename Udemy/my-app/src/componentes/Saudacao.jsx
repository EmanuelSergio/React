import React, {Component} from "react";

export default class Saudacao extends Component{
    render(){
        const {tipo, nome} = this.props

        return(
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="tipo..." value={tipo} />
            </div> 
        )
    }
}   