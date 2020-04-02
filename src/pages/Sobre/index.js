import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import './styles.css';

export default function Sobre() {
    return(
        <div className="project-container">
            <header className="site-header">
                <Header/>
            </header>

            <section className="about">
                <div className="wrap">
                    <h3>DIAGRAMADORA, ASSISTENTE DE ARTE E ARTE FINALISTA.</h3>
                    
                    <h3>CONHECIMENTOS:</h3>
                    <p>Ilustrator, InDesign, Photoshop, Word, PowerPoint.</p>

                    <h3>EXPERIÊNCIA:</h3>
                    <p>Diagramação; Recorte de imagens; Finalização e fechamento de arquivos para impressão offset ou digital.</p>

                    <h3>CONTATOS:</h3>
                    <p>55 11 99532.7532</p>
                    <p>iaravidal1973@gmail.com</p>
                </div>

            </section>
            

            <footer>
                <Footer/>
            </footer>
           
        </div>
    );
}