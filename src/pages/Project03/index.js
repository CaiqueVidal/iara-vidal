import React from 'react';

import quattor1 from '../../assets/quattor1.png';
import quattor2 from '../../assets/quattor2.png';
import quattor3 from '../../assets/quattor3.png';

import Header from '../Header';
import Footer from '../Footer';


export default function Project03() {
    return(
        <div className="project-container">
            <header className="site-header">
                <Header/>
            </header>

            <section className="project-content">
                <div className="main">                
                    <div className="text">
                        <h2>QUATTOR</h2>
                        <p>Catálogo de produtos (resinas plásticas).</p>
                    </div>
                    <div>
                        <img src={quattor1} alt="Quattor 1" />
                    </div>                                
                </div>

                <div className="secondary">
                    <img src={quattor2} alt="Quattor 2" />
                </div>

                <div className="secondary">
                    <img src={quattor3} alt="Quattor 3" />
                </div>

            </section>
            

            <footer>
                <Footer/>
            </footer>
           
        </div>
       
    );
}