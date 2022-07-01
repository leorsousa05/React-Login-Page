import React from 'react'
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const linksMenu = [
    {
      address: "##",
      nome: "Home"
    },
    {
      address: "##",
      nome: "Contatos"
    },
    {
      address: "##",
      nome: "Sobre Nós"
    },
    {
      address: "##",
      nome: "Perfil"
    }
  ]

  return (
    <div className="App">
      <Header links={linksMenu} />
      <Main />
    </div>
  );
}

export default App;
