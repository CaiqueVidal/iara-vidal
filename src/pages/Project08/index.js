import React from 'react';

import petrobras1 from '../../assets/petrobras1.png';
import petrobras2 from '../../assets/petrobras2.png';

import Header from '../Header';
import Footer from '../Footer';

import './styles.css';

export default function Project09() {
    return(
        <div className="project-container">
            <header className="site-header">
                <Header/>
            </header>

            <section className="project-content">
                <div className="main">                
                    <div className="text">
                        <h2>PETROBRAS</h2>
                        <p>Cartão de aniversário para os funcionários.</p>
                    </div>
                    <div>
                        <img src={petrobras1} alt="Petrobras 1" />
                    </div>                                
                </div>

                <div className="secondaryb">
                    <img src={petrobras2} alt="Petrobras 2" />
                </div>

            </section>
            

            <footer>
                <Footer/>
            </footer>
           
        </div>
       
    );
}