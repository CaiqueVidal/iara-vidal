import React from 'react';

import rhodia1 from '../../assets/rhodia1.png';
import rhodia2 from '../../assets/rhodia2.png';

import Header from '../Header';
import Footer from '../Footer';

export default function Project04() {
    return(
        <div className="project-container">
            <header className="site-header">
                <Header/>
            </header>

            <section className="project-content">
                <div className="main">                
                    <div className="text">
                        <h2>RHODIA (Solvay Group)</h2>
                        <p>Revista Nossa Gente - Publicação bimestral voltada para o público interno.</p>
                    </div>
                    <div>
                        <img src={rhodia1} alt="Rhodia 1" />
                    </div>                                
                </div>

                <div className="secondary">
                    <img src={rhodia2} alt="Rhodia 2" />
                </div>

            </section>
            

            <footer>
                <Footer/>
            </footer>
           
        </div>
       
    );
}