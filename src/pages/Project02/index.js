import React from 'react';

import stopHunger1 from '../../assets/stopHunger1.png';
import stopHunger2 from '../../assets/stopHunger2.png';
import stopHunger3 from '../../assets/stopHunger3.png';

import Header from '../Header';
import Footer from '../Footer';


export default function Project02() {
    return(
        <div className="project-container">
            <header className="site-header">
                <Header/>
            </header>

            <section className="project-content">
                <div className="main">                
                    <div className="text">
                        <h2>SODEXO (STOP HUNGER)</h2>
                        <p>Manuais criados em parceria com a UNESP para o cultivo de horta em casa e temperos.</p>
                    </div>
                    <div>
                        <img src={stopHunger1} alt="Stop Hunger 1" />
                    </div>                                
                </div>

                <div className="secondary">
                    <img src={stopHunger2} alt="Stop Hunger 2" />
                </div>

                <div className="secondary">
                    <img src={stopHunger3} alt="Stop Hunger 3" />
                </div>

            </section>
            

            <footer>
                <Footer/>
            </footer>
           
        </div>
       
    );
}