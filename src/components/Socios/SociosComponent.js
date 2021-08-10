import './socios.css';

const Socios = ({ socios }) => {
    return <div className="socios">
        {socios.map((socio, index) => {
            return <div key={index} className="boxContent">
                <div>
                    <h3>Nome: </h3>
                    <span>{socio.nome_socio}</span>
                </div>
                <hr></hr>
                <div>
                    <h3>CPF:</h3>
                    <span>{socio.cpf_representante_legal ? socio.cpf_representante_legal : 'N/A'}</span>
                </div>
            </div>
        })}
    </div>;
}

export default Socios;