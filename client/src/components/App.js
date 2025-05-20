import React, { Component, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { initGA, logPageView } from '../analytics';
import logo from './imgs/logo.png';
import search from './imgs/search.png';
import Footer from './utils/Footer';
import QuemSomos from './QuemSomos';
import Astronomia from './Astronomia/Astronomia';
import Fisica from './Fisica/Fisica';
import Matematica from './Matematica/Matematica';
import Quimica from './Quimica/Quimica';
import Home from './Home';
import Astronomiaprob from './Astronomia/Astronomia-prob';
import Fisicaprob from './Fisica/Fisica-prob';
import Matprob from './Matematica/Mat-prob';
import Astronomiamat from './Astronomia/Astronomia-mat';
import Fisicamat from './Fisica/Fisica-mat';
import Matematicamat from './Matematica/Matematica-mat';
import Quimicamat from './Quimica/Quimica-mat';
import Astronomiasim from './Astronomia/Astronomia-sim';
import Fisicagab from './Fisica/Fisica-gab';
import Fisicagabobf from './Fisica/Fisica-gab-obf';
import AstronomiaGab from "./Astronomia/Astronomia-gab"
import Matematicagab from './Matematica/Mat-gab';
import Matematicagaboim from './Matematica/Mat-gab-oim';
import Matematicagabman from './Matematica/Mat-gab-man';
import Matematicagabompd from './Matematica/Mat-gab-ompd';

function App() {
    const location = useLocation();

    useEffect(() => {
        initGA();
    }, []);

    useEffect(() => {
        logPageView();
    }, [location]);

    return (
        <div className="app-container">
            <div className="header">
                <div className="header-right">
                    <div className="menu">
                        <Link className="normal-link" to="/quemsomos">Quem Somos</Link>
                    </div>
                    <div className="menu">
                        <Link className="normal-link" to="/astronomia">Astronomia</Link>
                        <div className="dropdown">
                            <Link to="/astronomia">Olímpiadas de Astronomia</Link>
                            <Link to="/astronomia-problemas">Problemas de Astronomia</Link>
                            <Link to="/astronomia-materiais">Materiais de Astronomia</Link>
                            <Link className="last" to="/astronomia-simulados">Simulados de Astronomia</Link>
                            <Link className="last" to="/astronomia-gabaritos">Gabaritos Comentados de Astronomia</Link>
                        </div>
                    </div>
                    <div className="menu">
                        <Link className="normal-link" to="/física">Física</Link>
                        <div className="dropdown">
                            <Link to="/física">Olímpiadas de Física</Link>
                            <Link to="/física-gabaritos">Gabaritos Comentados de Física</Link>
                            <Link to="/física-materiais">Materiais de Física</Link>
                            <Link className="last" to="/física-problemas">Problemas de Física</Link>
                        </div>
                    </div>
                    <div className="menu">
                        <Link className="normal-link" to="/matemática">Matemática</Link>
                        <div className="dropdown">
                            <Link to="/matemática">Olímpiadas de Matemática</Link>
                            <Link to="/matemática-gabaritos">Gabaritos Comentados de Matemática</Link>
                            <Link to="/matemática-materiais">Materiais de Matemática</Link>
                            <Link className="last" to="/matemática-problemas">Problemas de Matemática</Link>
                        </div>
                    </div>
                    <div className="menu">
                        <Link className="normal-link" to="/química">Química</Link>
                        <div className="dropdown">
                            <Link to="/química">Olímpiadas de Química</Link>
                            <Link className="last" to="/química-materiais">Materiais de Química</Link>
                        </div>
                    </div>
                </div>
                <Link to="/" className="logo-link">
                    <img className="logo" src={logo} alt="Logo" />
                </Link>
            </div>

            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quemsomos" element={<QuemSomos />} />
                    <Route path="/astronomia" element={<Astronomia />} />
                    <Route path="/física" element={<Fisica />} />
                    <Route path="/matemática" element={<Matematica />} />
                    <Route path="/química" element={<Quimica />} />
                    <Route path="/astronomia-problemas" element={<Astronomiaprob />} />
                    <Route path="/física-problemas" element={<Fisicaprob />} />
                    <Route path="/matemática-problemas" element={<Matprob />} />
                    <Route path="/astronomia-materiais" element={<Astronomiamat />} />
                    <Route path="/física-materiais" element={<Fisicamat />} />
                    <Route path="/matemática-materiais" element={<Matematicamat />} />
                    <Route path="/química-materiais" element={<Quimicamat />} />
                    <Route path="/astronomia-simulados" element={<Astronomiasim />} />
                    <Route path="/física-gabaritos" element={<Fisicagab />} />
                    <Route path="/astronomia-gabaritos" element={<AstronomiaGab />} />
                    <Route path="/física-gabaritos-obf" element={<Fisicagabobf />} />
                    <Route path="/matemática-gabaritos" element={<Matematicagab />} />
                    <Route path="/matemática-gabaritos-oim" element={<Matematicagaboim />} />
                    <Route path="/matemática-gabaritos-mandacaru" element={<Matematicagabman />} />
                    <Route path="/matemática-gabaritos-ompd" element={<Matematicagabompd />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );
}

export default App;