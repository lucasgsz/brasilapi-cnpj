import React from 'react';
import './app.css';
import loadingSvg from '../loading-screen.svg';
import ContainerNav from './ContainerNav/ContainerNavComponent';


const App = () => {
  const [cnpj, setCnpj] = React.useState('');
  const [arrayCpnj, setArrayCpnj] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const handleChange = async () => {
    setLoading(true);
    // const response = await fetch('http://127.0.0.1:8000/api/consulta/' + cnpj);
    const response = await fetch('https://brasilapi.com.br/api/cnpj/v1/' + cnpj);
    const json = await response.json();
    setArrayCpnj(json);
    setLoading(false);
  }

  return (
    < div className="App" >
      <div className="header">
        <h1>Pesquisar CNPJ</h1>
        <div>
          <input placeholder="Digite o CNPJ" type="text" value={cnpj} onChange={({ target }) => setCnpj(target.value)} />
          <button onClick={handleChange}>Pesquisar</button>
        </div>
      </div>

      {
        loading &&
        <div className="loadingScreen">
          <span>Carregando</span>
          <img alt="carregando" src={loadingSvg} />
        </div>
      }
      {arrayCpnj.cnpj &&
        < ContainerNav arrayCnpj={arrayCpnj} />
      }
    </div >
  );
}

export default App;
