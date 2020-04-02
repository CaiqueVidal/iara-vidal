import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import dima from '../../assets/dima.png';
import stopHunger from '../../assets/stopHunger.png';
import quattor from '../../assets/quattor.png';
import rhodia from '../../assets/rhodia.png';
import parque from '../../assets/parque.png';
import itau from '../../assets/itau.png';
import expand from '../../assets/expand.png';
import petrobras from '../../assets/petrobras.png';
import faber_castell from '../../assets/faber-castell.png';


import Header from '../Header';
import Footer from '../Footer';

export default function Home() {
    return(
        <div className="home-container">
            <header className="site-header">
                <Header/>
            </header>

            <main className="home-main">
                <div className="wrap">
                    <div><Link to="/project01"><img src={dima} alt="Dima project" /></Link></div>
                    <div><Link to="/project04"><img src={rhodia} alt="Rhodia project" /></Link></div>
                    <div><Link to="/project07"><img src={expand} alt="Expand project" /></Link></div>
                    <div><Link to="/project02"><img src={stopHunger} alt="Stop Hunger project" /></Link></div>
                    <div><Link to="/project05"><img src={parque} alt="Parque Municipal project" /></Link></div>
                    <div><Link to="/project08"><img src={petrobras} alt="Petrobas project" /></Link></div>
                    <div><Link to="/project03"><img src={quattor} alt="Quattor project" /></Link></div>
                    <div><Link to="/project06"><img src={itau} alt="Itaú project" /></Link></div>
                    <div><Link to="/project09"><img src={faber_castell} alt="Faber-castell project" /></Link></div>
                </div>     
                
            </main>

            <footer>
                <Footer/>
            </footer>

        </div>
    );
}