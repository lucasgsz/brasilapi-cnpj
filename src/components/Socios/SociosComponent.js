import './socios.css';

const Socios = ({ arraySocios }) => {
    return <div className="socios">
        {arraySocios.map((socio, index) => {
            return <div key={index} className="boxContent">
                <div>
                    <h3>Nome: </h3>
                    <span>{socio.nome_socio}</span>
                </div>
                <hr></hr>
                <div>
                    <h3>CPF:</h3>
                    <span>{socio.cpf_representante_legal}</span>
                </div>
            </div>
        })}
    </div>;
}

export default Socios;