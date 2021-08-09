import './infoGerais.css';
const InfoGerais = ({ cnpj, razaoSocial, inicioAtividade, municipio, uf, descricaoAtividade }) => {
    return <div className="detalhes">
        <p> <b>Razão Social: </b> {razaoSocial} </p>
        <p> <b>CNPJ: </b> {cnpj} </p>
        <p> <b>Descrição: </b> Empresa de {municipio + ' / ' + uf} fundada em {inicioAtividade}.Sua atividade principal é {descricaoAtividade} </p>
    </div>
}

export default InfoGerais;