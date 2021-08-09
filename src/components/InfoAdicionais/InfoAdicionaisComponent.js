import './infoAdicionais.css';

const InfoAdicionais = ({ arrayCnpj }) => {
    return <div className="infoAdicionais">
        <div>
            <h3>Nome empresarial</h3>
            <span>{arrayCnpj.razao_social}</span>
        </div>
        <div>
            <h3>Data da Abertura</h3>
            <span>{arrayCnpj.data_inicio_atividade}</span>
        </div>
        <div>
            <h3>Número da inscrição</h3>
            <span>{arrayCnpj.cnpj + '-' + arrayCnpj.descricao_matriz_filial}</span>
        </div>
        <div>
            <h3>Última atualização</h3>
            {/* <span>{arrayCnpj.}</span> */}
        </div>
        <div>
            <h3>Logradouro</h3>
            <span>{arrayCnpj.logradouro}</span>
        </div>
        <div>
            <h3>Número</h3>
            <span>{arrayCnpj.numero}</span>
        </div>
        <div>
            <h3>CEP</h3>
            <span>{arrayCnpj.cep}</span>
        </div>
        <div>
            <h3>Bairro</h3>
            <span>{arrayCnpj.bairro}</span>
        </div>
        <div>
            <h3>Municipio</h3>
            <span>{arrayCnpj.municipio}</span>
        </div>
        <div>
            <h3>UF</h3>
            <span>{arrayCnpj.uf}</span>
        </div>
        <div>
            <h3>Telefone</h3>
            <span>{arrayCnpj.ddd_telefone_1}</span>
            <span>{arrayCnpj.ddd_telefone_2}</span>
        </div>
        <div>
            <h3>Capital Social</h3>
            <span>{arrayCnpj.capital_social}</span>
        </div>
    </div>
}

export default InfoAdicionais;