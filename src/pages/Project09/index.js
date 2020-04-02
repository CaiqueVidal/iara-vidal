import React from 'react';

import faber_castell1 from '../../assets/faber-castell1.png';
import faber_castell2 from '../../assets/faber-castell2.png';

import Header from '../Header';
import Footer from '../Footer';


export default function Project09() {
    return(
        <div className="project-container">
            <header className="site-header">
                <Header/>
            </header>

            <section className="project-content">
                <div className="main">                
                    <div className="text">
                        <h2>FABER-CASTELL</h2>
                        <p>Portfólio anual de produtos para estabelecimentos comerciais.</p>
                    </div>
                    <div>
                        <img src={faber_castell1} alt="Faber-castell 1" />
                    </div>                                
                </div>

                <div className="secondary">
                    <img src={faber_castell2} alt="Faber-castell 2" />
                </div>

            </section>
            

            <footer>
                <Footer/>
            </footer>
           
        </div>
       
    );
}