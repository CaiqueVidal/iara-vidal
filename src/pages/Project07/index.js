import React from 'react';

import expand1 from '../../assets/expand1.png';
import expand2 from '../../assets/expand2.png';

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
                        <h2>EXPAND</h2>
                        <p>Catálogo anual de vinhos e acessórios (nacionais e importados).</p>
                    </div>
                    <div>
                        <img src={expand1} alt="Expand 1" />
                    </div>                                
                </div>

                <div className="secondary">
                    <img src={expand2} alt="Expand 2" />
                </div>

            </section>
            

            <footer>
                <Footer/>
            </footer>
           
        </div>
       
    );
}