import React from 'react'
import ReactDOM from 'react-dom' 

import BomDia from './componentes/BomDia'
import { BoaTarde, BoaNoite } from './componentes/Multiplos'

ReactDOM.render(<BomDia name="gustavo lima" idade={10}/>, document.getElementById('root'))
ReactDOM.render(<BoaTarde nome="pedro lima"/>, document.getElementById('root'))