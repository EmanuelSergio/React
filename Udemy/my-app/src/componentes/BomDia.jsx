import React from "react";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default props => 
    [
        <h1 key='h1'>bom dia {props.name} sua idade é {props.idade}</h1>,
        <h2 key='h2'>ate logo</h2>
    ]


// export default props => {
//     <div>
//         <h1>bom dia {props.name} sua idade é {props.idade}</h1>
//         <h2>ate logo</h2>
//     </div>
// } 

// export default props => {
//     <React.Fragment>
//         <h1>bom dia {props.name} sua idade é {props.idade}</h1>
//         <h2>ate logo</h2>
//     </React.Fragment>
// } 