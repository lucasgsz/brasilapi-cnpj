import './infoAdicionais.css';

const infoAdicionais = ({ cnpj, localidade, nomeFantasia }) => {
    return <div className="infoAdicionais card">
        <div>
            <h3>Nome empresarial</h3>
            <span>Nome empresarial</span>
        </div>
        <div>
            <h3>Data da Abertura</h3>
            <span>Data da Abertura</span>
        </div>
        <div>
            <h3>Número da inscrição</h3>
            <span>Número da inscrição</span>
        </div>
        <div>
            <h3>Última atualização</h3>
            <span>Última atualização</span>
        </div>
        <div>
            <h3>Logradouro</h3>
            <span>Logradouro</span>
        </div>
        <div>
            <h3>Número</h3>
            <span>Número</span>
        </div>
        <div>
            <h3>CEP</h3>
            <span>CEP</span>
        </div>
        <div>
            <h3>Bairro</h3>
            <span>Bairro</span>
        </div>
        <div>
            <h3>Municipio</h3>
            <span>Municipio</span>
        </div>
        <div>
            <h3>Telefone</h3>
            <span>Telefone</span>
        </div>
        <div>
            <h3>Capital Social</h3>
            <span>Telefone</span>
        </div>
    </div>
}

export default infoAdicionais;