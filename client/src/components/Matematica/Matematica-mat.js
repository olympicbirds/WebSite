import React from 'react';

// materiais

import rav from '../docs/materiais/material-matematica/Material_1.pdf';
import esin from '../docs/materiais/material-matematica/Material_2.pdf';
import pee from '../docs/materiais/material-matematica/Material_3.pdf';
import lgc from '../docs/materiais/material-matematica/Material_4.pdf';
import calc from '../docs/materiais/material-matematica/Cálculo_1_Para_Olimpíadas_OB.pdf';
import RacLogico from '../docs/materiais/material-matematica/OBMEP_Raciocinio_Lógico.pdf';
import ObmepSeqI from '../docs/materiais/material-matematica/OBMEP_Sequencias_I.pdf';
import ObmepSeqII from '../docs/materiais/material-matematica/OBMEP_Sequencias_II.pdf';
import ObmepTeoNumerosI from '../docs/materiais/material-matematica/OBMEP_Teoria_Numeros_I.pdf';
import ObmepTeoNumerosII from '../docs/materiais/material-matematica/OBMEP_Teoria_Numeros_II.pdf';

const Matematicamat = () => {
    return (
        <div>
            <h1 class="fontizzao">MATERIAIS - MATEMÁTICA</h1>
            <hr class="line3"></hr>
            <center>
                <div className="text-container2">
                    <h4 className="corzaoo">
                        Para aprender os principais conteúdos que costumam aparecer em olimpíadas científicas e vestibulares, esta seção é o lugar ideal. Aqui, você encontrará materiais organizados para ajudar a fortalecer sua base de conhecimentos e desenvolver as habilidades necessárias para se destacar. Pronto(a) para alcançar novos patamares?
                    </h4>
                </div>
                <br />
            </center>
            <div class="fundo">
                <center>
                    
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Coletâneas de Sequências </h4>
                        <h4 className="cor">
                            Preparatório OBMEP
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={ObmepSeqI}>
                            <h4 className="cordiffff">Material I</h4>
                        </a>
                        <a class="active" href={ObmepSeqII}>
                            <h4 className="cordiffff">Material II</h4>
                        </a>
                    </div>
                     <br/>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Coletâneas de Teoria dos Números </h4>
                        <h4 className="cor">
                            Preparatório OBMEP
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={ObmepTeoNumerosI}>
                            <h4 className="cordiffff">Material I</h4>
                        </a>
                        <a class="active" href={ObmepTeoNumerosII}>
                            <h4 className="cordiffff">Material II</h4>
                        </a>
                    </div>
                     <br/>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Coletânea de Raciocínio Lógico </h4>
                        <h4 className="cor">
                            Preparatório OBMEP
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={RacLogico}>
                            <h4 className="cordiffff">Material</h4>
                        </a>
                    </div>
                    <br />
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Livro Cálculo 1</h4>
                        <h4 className="cor">
                            Olimpíadas
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={calc}>
                            <h4 className="cordiffff">Material</h4>
                        </a>
                    </div>
                    <br />
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Método de Ravi</h4>
                        <h4 className="cor">
                            OBM
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={rav}>
                            <h4 className="cordiffff">Material</h4>
                        </a>
                    </div>
                    <br />
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Estratégias Introdutórias</h4>
                        <h4 className="cor">
                            OBM
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={esin}>
                            <h4 className="cordiffff">Material</h4>
                        </a>
                    </div>
                    <br />
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Princípio do Elemento Externo</h4>
                        <h4 className="cor">
                            OBM
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={pee}>
                            <h4 className="cordiffff">Material</h4>
                        </a>
                    </div>
                    <br />
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Lugar Geométrico dos Complexos</h4>
                        <h4 className="cor">
                            OBM | ITA/IME
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={lgc}>
                            <h4 className="cordiffff">Material</h4>
                        </a>
                    </div>
                    <br />
                </center>
            </div>
        </div>
    );
}

export default Matematicamat;
