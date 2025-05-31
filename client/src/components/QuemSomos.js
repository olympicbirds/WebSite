import React from 'react';

// Diretoria

import DaviLucas from './imgs/qs/Davi-Lucas.jpg';
import TiagoRocha from './imgs/qs/Tiago-Rocha.jpg';
import LeonLuca from './imgs/qs/Leon-Luca.jpg';
import RebecaMikai from './imgs/qs/Rebeca-Mikai.jpg';

// Mídia & TI

import VictorGarcia from './imgs/qs/Victor-Garcia.jpeg';

import ClaraCristina from './imgs/qs/Clara Cristina Guimarães Antunes.jpg';
import SofiaCarneiro from './imgs/qs/Sofia Carneiro.jpg';

// Astronomia

import FelipeMaia from './imgs/qs/Felipe-Maia.jpg';
import AnaLuiza from './imgs/qs/Ana-Luiza.jpg';
import FilipeYaHu from './imgs/qs/Filipe-Ya-Hu.jpg';
import KauaVictor from './imgs/qs/Kaua-Victor.jpg';
import MariaClara from './imgs/qs/Maria-Clara.jpg';
import NataliaRosa from './imgs/qs/Natalia-Rosa.jpg';
import NicholasLage from './imgs/qs/Nicholas-Lage.jpg';
import PauloIsidro from './imgs/qs/Paulo-Isidro.jpeg';

import AlexandreMonte from './imgs/qs/Alexandre Monte.jpg';
import GuilhermeAugusto from './imgs/qs/Guilherme Augusto.jpg';
import LuisHenrique from './imgs/qs/Luis Henrique_.jpg';
import HelenaMendes from './imgs/qs/Helena Mendes.jpg'
import MiguelMenezes from './imgs/qs/Miguel Menezes.jpg'

// Física

import LucasCavalcante from './imgs/qs/Lucas-Cavalcante.jpg';
import GabrielDorigon from './imgs/qs/Gabriel-Dorigon.jpg';
import GuilhermeMartins from './imgs/qs/Guilherme-Martins.jpg';
import GustavoGlobig from './imgs/qs/Gustavo-Globig.jpg';
import HeitorChaves from './imgs/qs/Heitor-Chaves.jpg';
import MariaBeatriz from './imgs/qs/Maria-Beatriz.jpg';
import PedroSaldanha from './imgs/qs/Pedro-Saldanha.jpg';
import WilliamAlves from './imgs/qs/William-Alves.jpg';

import TobiasGabriel from './imgs/qs/Tobias Gabriel.jpg';
import JailsonHenrique from './imgs/qs/Jailson Henrique.jpg';
import LuizFernando from './imgs/qs/Luiz Fernando.jpg';
import VictorHugo from './imgs/qs/Victor Hugo.jpg';

// Matemática

import MarcosVinicius from './imgs/qs/Marcos-Vinicius.jpg';
import GuilhermeGalvao from './imgs/qs/Guilherme-Galvao.jpg';
import JuliaLeguiza from './imgs/qs/Julia-Leguiza.jpg';
import JulioCesar from './imgs/qs/Julio-Cesar.jpg';
import KauanEmanuel from './imgs/qs/Kauan-Emanuel.jpg';
import PedroHenrique from './imgs/qs/Pedro-Henrique.jpg';
import FelipeMota from './imgs/qs/Felipe-Mota.jpeg';

import ArturFerreira from './imgs/qs/Artur Ferreira.jpg';
import PauloJonatas from './imgs/qs/Paulo Jônatas.jpg';
import SergioBittencourt from './imgs/qs/Sérgio Bittencourt.jpg';
import SofiaCosta from './imgs/qs/Sofia Costa Mat.jpg';

// Química

import AnnaKessya from './imgs/qs/Anna-Kessya.jpg';
import LuizClaudio from './imgs/qs/Luiz-Claudio.jpg';

import GuilhermeSoares from './imgs/qs/Guilherme Soares.jpg';
import IsabelaXenofonte from './imgs/qs/Isabela Xenofonte Martins.jpg';
import RaissaLoana from './imgs/qs/Raissa Loana.jpg';

// Ex Colaboradores

import RaulSztutman from './imgs/qs/Raul.jpeg';
import AlefeRyan from './imgs/qs/Alefe-Ryan.jpg';
import DanielaEmilia from './imgs/qs/Daniela-Emilia.jpg';
import LeonardoTorres from './imgs/qs/Leonardo-Torres.jpg';

const QuemSomos = () => {
    return (
        <div className="fundo">
            <h1 className="fontezaocor">NOSSA HISTÓRIA E OBJETIVOS</h1>
            <br/>
            <div className="text-container">
                <h4 className="fontezao2cor">"Toc, toc! Quem é?"</h4>
            </div>
            <div className="text-container">
                <h4 className="cor">
                    São as oportunidades batendo à sua porta, trazendo a chance de cruzar o mundo para viver uma experiência transformadora em uma olimpíada internacional. O quão egoístas seríamos se, conhecendo tantas possibilidades, simplesmente deixássemos de compartilhá-las com o restante da sociedade? Reclamar da corrupção e das injustiças não basta; precisamos ser os agentes da mudança que queremos ver.
                </h4>
                <br/>
                <h4 className="cor">
                É por isso que nasceu o Olympic Birds: um projeto educacional gratuito, movido pela determinação de transformar o Brasil. Nosso propósito é democratizar o acesso a oportunidades acadêmicas, como olimpíadas científicas e vestibulares, enquanto oferecemos conteúdos de qualidade para inspirar e capacitar aqueles que desejam atingir seu máximo potencial. Porque juntos, podemos abrir nossas asas e voar rumo a um futuro melhor!
                </h4>
            </div>
            <br/>
            <h1 className="fontezaocor">EQUIPE DO OLYMPIC BIRDS</h1>
            <h3 className="fontezaocor">Diretoria</h3>
            <div class="equipe-container">
                <div class="membro">
                    <img src={DaviLucas} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Davi Lucas</h3>
                        <h5 class="textozao">Presidente</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={TiagoRocha} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Tiago Rocha</h3>
                        <h5 class="textozao">Vice-presidente</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={LeonLuca} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Leon Luca</h3>
                        <h5 class="textozao">Diretor de Materiais</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={KauanEmanuel} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Kauan Emanuel</h3>
                        <h5 class="textozao">Diretor de Mídia e Conteúdo</h5>
                    </center>
                </div>
            </div>
            <br/>
            <h3 className="fontezaocor">Departamento de Mídia</h3>

            <div class="equipe-container">

                <div class="membro">
                    <img src={ClaraCristina} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Clara Cristina</h3>
                        <h5 class="textozao">Editora de Vídeo</h5>
                    </center>
                </div>

                <div class="membro">
                    <img src={GustavoGlobig} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Gustavo Globig</h3>
                        <h5 class="textozao">Editor de Vídeo</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={RebecaMikai} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Rebeca Mikai</h3>
                        <h5 class="textozao">Criadora de Posts</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={SofiaCarneiro} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Sofia Carneiro</h3>
                        <h5 class="textozao">Criadora de Posts</h5>
                    </center>
                </div>

            </div>
            <br/>
            <h3 className="fontezaocor">Departamento de Astronomia</h3>
            <div class="equipe-container">
                <div class="membro">
                    <img src={FelipeMaia} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Felipe Maia</h3>
                        <h5 class="textozao">Coordenador</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={AlexandreMonte} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Alexandre Monte</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={AnaLuiza} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Ana Luiza</h3>
                        <h5 class="textozao">Criadora de Materiais</h5>
                    </center>
                </div>
                
                <div class="membro">
                    <img src={FilipeYaHu} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Filipe Ya Hu</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>
            </div>
            <div class="equipe-container">
                <div class="membro">
                    <img src={GuilhermeAugusto} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Guilherme Augusto</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={HelenaMendes} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Helena Mendes</h3>
                        <h5 class="textozao">Criadora de Materiais</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={KauaVictor} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Kauã Victor</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={LuisHenrique} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Luis Henrique</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>

            </div>
            <div class="equipe-container">
                <div class="membro">
                    <img src={MiguelMenezes} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Miguel Menezes</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>

                <div class="membro">
                    <img src={NataliaRosa} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Natália Rosa</h3>
                        <h5 class="textozao">Criadora de Materiais</h5>
                    </center>
                </div>

                <div class="membro">
                    <img src={PauloIsidro} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Paulo Isidro</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>

            </div>

            <br/>
            <h3 className="fontezaocor">Departamento de Física</h3>
            <div class="equipe-container">
                <div class="membro">
                    <img src={LucasCavalcante} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Lucas Cavalcante</h3>
                        <h5 class="textozao">Coordenador</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={AlexandreMonte} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Alexandre Monte</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={GabrielDorigon} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Gabriel Dorigon</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={GustavoGlobig} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Gustavo Globig</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>
            </div>
            <div class="equipe-container">



                <div class="membro">
                    <img src={JailsonHenrique} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Jailson Henrique</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={MariaBeatriz} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Maria Beatriz</h3>
                        <h5 class="textozao">Criadora de Materiais</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={LuizFernando} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Luiz Fernando</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={RebecaMikai} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Rebeca Mikai</h3>
                        <h5 class="textozao">Criadora de Materiais</h5>
                    </center>
                </div>
            </div>
            <div class="equipe-container">

                <div class="membro">
                    <img src={TobiasGabriel} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Tobias Gabriel</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={VictorHugo} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Victor Hugo</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={WilliamAlves} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">William Alves</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>
            </div>

            <br/>
            <h3 className="fontezaocor">Departamento de Matemática</h3>
            <div class="equipe-container">
                <div class="membro">
                    <img src={KauanEmanuel} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Kauan Emanuel</h3>
                        <h5 class="textozao">Coordenador</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={ArturFerreira} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Artur Ferreira</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>
                
                <div class="membro">
                    <img src={FelipeMota} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Felipe Mota</h3>
                        <h5 class="textozao">Criador do Livro de Cálculo</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={JulioCesar} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Júlio Cesar</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>


            </div>

            <div class="equipe-container">

                <div class="membro">
                    <img src={PauloJonatas} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Paulo Jônatas</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={SergioBittencourt} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Sérgio Bittencourt</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={SofiaCosta} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Sofia Costa</h3>
                        <h5 class="textozao">Criadora de Materiais</h5>
                    </center>
                </div>
            </div>
            <br/>
            <h3 className="fontezaocor">Departamento de Química</h3>
            <div class="equipe-container">
                <div class="membro">
                    <img src={AnnaKessya} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Anna Kessya</h3>
                        <h5 class="textozao">Coordenadora</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={GuilhermeSoares} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Guilherme Soares</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={IsabelaXenofonte} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Isabela Xenofonte</h3>
                        <h5 class="textozao">Criadora de Materiais</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={LuizClaudio} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Luiz Claúdio</h3>
                        <h5 class="textozao">Criador de Materiais</h5>
                    </center>
                </div>
            </div>
            <br/>
            <h3 className="fontezaocor">Ex Colaboradores</h3>
            <div class="equipe-container">

                <div class="membro">
                    <img src={AlefeRyan} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Alefe Ryan</h3>
                        <h5 class="textozao">Física</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={DanielaEmilia} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Daniela Emília</h3>
                        <h5 class="textozao">Física </h5>
                    </center>
                </div>
                
                <div class="membro">
                    <img src={GuilhermeGalvao} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Guilherme Galvão</h3>
                        <h5 class="textozao">Matemática</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={GuilhermeMartins} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Guilherme Martins</h3>
                        <h5 class="textozao">Física</h5>
                    </center>
                </div>
                

            </div>
            <div class="equipe-container">
                
                <div class="membro">
                    <img src={HeitorChaves} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Heitor Chaves</h3>
                        <h5 class="textozao">Física</h5>
                    </center>
                </div>

                <div class="membro">
                    <img src={JuliaLeguiza} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Júlia Leguiza</h3>
                        <h5 class="textozao">Matemática</h5>
                    </center>
                </div>

                <div class="membro">
                    <img src={LeonardoTorres} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Leonardo Torres</h3>
                        <h5 class="textozao">Química</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={MarcosVinicius} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Marcos Vinícius</h3>
                        <h5 class="textozao">Matemática</h5>
                    </center>
                </div>
            </div>
            <div class="equipe-container">

                <div class="membro">
                    <img src={MariaClara} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Maria Clara</h3>
                        <h5 class="textozao">Astronomia</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={NicholasLage} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Nicholas Lage</h3>
                        <h5 class="textozao">Astronomia</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={PedroHenrique} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Pedro Henrique</h3>
                        <h5 class="textozao">Matemática</h5>
                    </center>
                </div>
                    <div class="membro">
                    <img src={PedroSaldanha} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Pedro Saldanha</h3>
                        <h5 class="textozao">Física</h5>
                    </center>
                </div>
            </div>
            <div class="equipe-container">
                <div class="membro">
                    <img src={RaissaLoana} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Raissa Loana</h3>
                        <h5 class="textozao">Química</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={RaulSztutman} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Raul Sztutman</h3>
                        <h5 class="textozao">Astronomia</h5>
                    </center>
                </div>
                <div class="membro">
                    <img src={VictorGarcia} class="imagem-circular"/>
                    <center>
                        <h3 class="fontezao3cor">Victor Garcia</h3>
                        <h5 class="textozao">Desenvolvedor do Site</h5>
                    </center>
                </div>
            </div>
            <br/>
        </div>
    );
};

export default QuemSomos;
