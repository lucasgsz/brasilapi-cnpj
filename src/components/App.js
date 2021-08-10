import React from 'react';
import './app.css';
import loadingSvg from '../loading-screen.svg';
import ContainerNav from './ContainerNav/ContainerNavComponent';


const App = () => {
  const [cnpj, setCnpj] = React.useState('');
  const [arrayCpnj, setArrayCpnj] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const handleChange = async () => {
    setLoading(true);
    const cnpjStringTratada = cnpj.replaceAll('.', '').replaceAll('-', '').replaceAll('/', '');
    const response = await fetch('http://127.0.0.1:8000/api/consulta/' + cnpjStringTratada);
    const json = await response.json();
    if (json.status === 'sucesso') {
      setArrayCpnj(json.arrayCnpj);
      setCnpj('');
    } else {
      // tratamento erro
    }
    setLoading(false);
  }

  return (
    < div className="App" >
      <div className="header">
        <h1>Pesquisar CNPJ</h1>
        <div>
          <input placeholder="Digite o CNPJ" value={cnpj} onChange={({ target }) => setCnpj(target.value)} />
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
      {arrayCpnj && !loading &&
        < ContainerNav arrayCnpj={arrayCpnj} />
      }
    </div >
  );
}

export default App;
