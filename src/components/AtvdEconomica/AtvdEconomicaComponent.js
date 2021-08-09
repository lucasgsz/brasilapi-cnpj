import './atvdEconomica.css';

const AtvdEconomica = ({ arrayAtividades }) => {
    return <div className="ativiEconomica">
        {arrayAtividades.map((atividade, index) => {
            return (
                <div key={index} className="boxContent">
                    <div>
                        <h3>Codigo:</h3>
                        <span>{atividade.codigo}</span>
                    </div>
                    <hr></hr>
                    <div className="descricaoBox">
                        <h3>Descrição:</h3>
                        <span>{atividade.descricao}</span>
                    </div>
                </div>
            )
        })}
    </div>;
}

export default AtvdEconomica;