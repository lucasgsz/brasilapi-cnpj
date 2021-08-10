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
            <InfoGerais infoGerais={arrayCnpj.infoGerais}/>
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
                        <InfoAdicionais infoGerais={arrayCnpj.infoGerais} endereco={arrayCnpj.endereco} />
                    }
                    {boxActive === 'socios' &&
                        <Socios socios={arrayCnpj.socios} />
                    }
                    {boxActive === 'atvdEconomica' &&
                        <AtvdEconomica atividades={arrayCnpj.atividadesEconomicas} />
                    }
                </div>
            </div>
        </div>
    )

}

export default ContainerNav;