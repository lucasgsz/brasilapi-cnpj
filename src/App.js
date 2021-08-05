import React from 'react';
import Detalhes from './components/DetalhesComponent';

function App() {
  const [cnpj, setCnpj] = React.useState('');
  const [arrayCpnj, setArrayCpnj] = React.useState({});

  const findCnpj = async () => {
    const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
    const json = await response.json();
    setArrayCpnj(json);
  }

  return (
    < div className="App" >
      {arrayCpnj.cnpj &&
        <Detalhes cnpj={arrayCpnj.cnpj} razaoSocial={arrayCpnj.razao_social} />
      }
      <h1>Pesquisar CNPJ</h1>
      <input type="text" value={cnpj} onChange={({ target }) => setCnpj(target.value)} />
      <button onClick={findCnpj}>Pesquisar</button>
      {arrayCpnj && <pre>{arrayCpnj.message}</pre>}
    </div >
  );
}

export default App;
