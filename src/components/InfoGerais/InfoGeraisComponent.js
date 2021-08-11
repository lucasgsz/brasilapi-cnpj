import './infoGerais.css';
const InfoGerais = ({ infoGerais }) => {
    return <div className="detalhes">
        <p> <b>Razão Social: </b> {infoGerais.razaoSocial} </p>
        <p> <b>CNPJ: </b> {infoGerais.cnpj} </p>
        <p> <b>Descrição: </b> Empresa de {infoGerais.estadoFundacao} fundada em {infoGerais.inicioAtvd}. Sua atividade principal é {infoGerais.descAtividade} </p>
    </div>
}

export default InfoGerais;