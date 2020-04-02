import React from 'react';

import itau1 from '../../assets/itau1.png';
import itau2 from '../../assets/itau2.png';

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
                        <h2>ITAÚ</h2>
                        <p>Mala direta PIC Natureza (título de capitalização).</p>
                    </div>
                    <div>
                        <img src={itau1} alt="Itaú 1" />
                    </div>                                
                </div>

                <div className="secondary">
                    <img src={itau2} alt="Itaú 2" />
                </div>

            </section>
            

            <footer>
                <Footer/>
            </footer>
           
        </div>
       
    );
}