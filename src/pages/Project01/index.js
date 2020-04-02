import React from 'react';

import dima1 from '../../assets/dima1.png';
import dima2 from '../../assets/dima2.png';

import Header from '../Header';
import Footer from '../Footer';


export default function Project01() {
    return(
        <div className="project-container">
            <header className="site-header">
                <Header/>
            </header>

            <section className="project-content">
                <div className="main">                
                    <div className="text">
                        <h2>SODEXO (DIMA)</h2>
                        <p>Livros com receitas sustentáveis impressos anualmente no Dia Mundial da Alimentação (16 de outubro).</p>
                    </div>
                    <div>
                        <img src={dima1} alt="Dima1" />
                    </div>                                
                </div>

                <div className="secondary">
                    <img src={dima2} alt="Dima2" />
                </div>

            </section>
            

            <footer>
                <Footer/>
            </footer>
           
        </div>
       
    );
}