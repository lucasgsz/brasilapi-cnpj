import './infoAdicionais.css';

const InfoAdicionais = ({ infoGerais, endereco }) => {
    return <div className="infoAdicionais">
        <div>
            <h3>Nome empresarial</h3>
            <span>{infoGerais.razaoSocial}</span>
        </div>
        <div>
            <h3>Data da Abertura</h3>
            <span>{infoGerais.inicioAtvd}</span>
        </div>
        <div>
            <h3>Número da inscrição</h3>
            <span>{infoGerais.numInscricao}</span>
        </div>
        <div>
            <h3>Última atualização</h3>
            <span>{infoGerais.ultimaSituacao}</span>
        </div>
        <div>
            <h3>Logradouro</h3>
            <span>{endereco.logradouro}</span>
        </div>
        <div>
            <h3>Número</h3>
            <span>{endereco.numero}</span>
        </div>
        <div>
            <h3>CEP</h3>
            <span>{endereco.cep}</span>
        </div>
        <div>
            <h3>Bairro</h3>
            <span>{endereco.bairro}</span>
        </div>
        <div>
            <h3>Municipio</h3>
            <span>{endereco.municipio}</span>
        </div>
        <div>
            <h3>UF</h3>
            <span>{endereco.uf}</span>
        </div>
        {/* {endereco.telefone.map((item, index) => {
            <div>
                <h3>Telefone {index}</h3>
                <span>{item.telefone + { index }}</span>
            </div>
        })} */}
        <div>
            <h3>Capital Social</h3>
            <span>{infoGerais.capitalSocial}</span>
        </div>
    </div>
}

export default InfoAdicionais;