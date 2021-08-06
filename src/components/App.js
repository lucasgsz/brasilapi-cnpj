import React from 'react';
import './app.css';
import Detalhes from './Detalhes/DetalhesComponent';
import InfoAdicionais from './InfoAdicionais/InfoAdicionaisComponent';
import Socios from './Socios/SociosComponent';
import loadingSvg from '../loading-screen.svg';
import AtividadeEconomica from './AtiviEconomica/AtiviEconomica';


function App() {
  const [cnpj, setCnpj] = React.useState('');
  const [arrayCpnj, setArrayCpnj] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const handleChange = async () => {
    setLoading(true);
    const response = await fetch('http://127.0.0.1:8000/api/consulta/' + cnpj);
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
          <img src={loadingSvg} />
        </div>
      }
      <Detalhes />
      <InfoAdicionais />
      <Socios />
      <AtividadeEconomica />
    </div >
  );
}

export default App;
