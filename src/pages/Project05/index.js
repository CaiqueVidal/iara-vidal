import React from 'react';

import parque1 from '../../assets/parque1.png';
import parque2 from '../../assets/parque2.png';

import Header from '../Header';
import Footer from '../Footer';


export default function Project05() {
    return(
        <div className="project-container">
            <header className="site-header">
                <Header/>
            </header>

            <section className="project-content">
                <div className="main">                
                    <div className="text">
                        <h2>PARQUE MUNICIPAL NASCENTES DE PARANAPIACABA (Santo André)</h2>
                        <p>Atlas contendo todas as informações sobre o funcionamento e conservação do Parque.</p>
                    </div>
                    <div>
                        <img src={parque1} alt="Parque 1" />
                    </div>                                
                </div>

                <div className="secondary">
                    <img src={parque2} alt="Parque 2" />
                </div>

            </section>
            

            <footer>
                <Footer/>
            </footer>
           
        </div>
       
    );
}