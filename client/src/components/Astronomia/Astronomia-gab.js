import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import oba from '../imgs/OBA.png';

import nivel3_25_oba from '../docs/gabaritos/gabaritos-astronomia/OBA/GabaOBA2025N3.pdf';
import nivel4_25_oba from '../docs/gabaritos/gabaritos-astronomia/OBA/GabaOBA2025N4.pdf';


const AstronomiaGab = () => {
    return (
        <div>
            <h1 class="fontizzao">GABARITOS COMENTADOS - ASTRONOMIA</h1>
            <hr class="line3"></hr>
            <center>
            <div className="text-container2">
                <h4 className="corzaoo">
                    Para os estudantes ansiosos por conferir seus acertos nas principais olimpíadas e seletivas do Brasil, esta seção foi feita para você. Aqui, você poderá acompanhar seu desempenho e avaliar sua evolução rumo ao sucesso. Preparado(a) para conferir seus resultados?
                </h4>
            </div>
            <br/>
            </center>
            <div class="fundo">
                <center>
                <div class="equipe-container">
                    <div class="membro">
                        <img src={oba} class="imagem-circular"/>
                    </div>
                </div>
                <br/>
                <div className="button-container-diff">
                    <button class="botao-transparente2-selected">OBA</button>
                </div>
                <br/>
                <div className="text-container11">
                        <h4 className="fontezao7cor">Fase Única - 2025</h4>
                </div>
                <div className="button-container-diff">
                    <a href={nivel3_25_oba}>
                        <button class="botao-transparente2-diff">Nível III</button>
                    </a>
                </div>
                <br/>
                <div className="button-container-diff">
                    <a href={nivel4_25_oba}>
                        <button class="botao-transparente2-diff">Nível IV</button>
                    </a>
                </div>
                </center>
                <br/>
            </div>
        </div>
    );
}

export default AstronomiaGab;