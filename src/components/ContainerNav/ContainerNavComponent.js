import './containerNav.css';
import React from 'react';
import InfoAdicionais from '../InfoAdicionais/InfoAdicionaisComponent';
import InfoGerais from '../InfoGerais/InfoGeraisComponent';
import Socios from '../Socios/SociosComponent';
import AtvdEconomica from '../AtvdEconomica/AtvdEconomicaComponent';


const ContainerNav = ({ arrayCnpj }) => {
    const [boxActive, setBoxActive] = React.useState('infoAdicionais');
    function switchBox({ target }) {
        const arrayButtons = document.querySelectorAll('[data-idbox]');
        arrayButtons.forEach((item) => {
            item.classList.remove('ativo');
        });
        target.classList.add('ativo');
        setBoxActive(target.dataset.idbox);
    }
    return (
        <div>
            <InfoGerais
                cnpj={arrayCnpj.cnpj}
                razaoSocial={arrayCnpj.razao_social}
                inicioAtividade={arrayCnpj.data_inicio_atividade}
                municipio={arrayCnpj.municipio}
                uf={arrayCnpj.uf}
                descricaoAtividade={arrayCnpj.cnae_fiscal_descricao}
            />
            < div className="containerNav card">
                <div className="headerNav">
                    <button className="ativo" data-idbox="infoAdicionais" onClick={switchBox}>
                        Informações Adicionais
                    </button>
                    <button data-idbox="socios" onClick={switchBox}>
                        Socios
                    </button>
                    <button data-idbox="atvdEconomica" onClick={switchBox}>
                        Atividade Economica
                    </button>
                </div>
                <div className="bodyNav">
                    {boxActive === 'infoAdicionais' &&
                        <InfoAdicionais arrayCnpj={arrayCnpj} />
                    }
                    {boxActive === 'socios' &&
                        <Socios arraySocios={arrayCnpj.qsa} />
                    }
                    {boxActive === 'atvdEconomica' &&
                        <AtvdEconomica arrayAtividades={arrayCnpj.cnaes_secundarias} />
                    }
                </div>
            </div>
        </div>
    )

}

export default ContainerNav;