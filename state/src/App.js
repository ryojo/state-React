import React from 'react';

export default class App extends React.Component{
state={

 nome:  "joao pedro januario",
 sobrenome: "Oliveira Santos" 


}

  render(){
 
  


  return(
<div id="container">



<h1>vamos mostrar como exibir o estado</h1>
<h2>{this.state.nome} "isso é um estado"</h2>
<h3>{this.state.sobrenome}, "isso aqui também é um estado"</h3>








</div>









  );
}


}


