import React from "react";
import { Link } from 'react-router-dom';

import iconEmail from '../../assets/iconEmail.png';
import iconWhats from '../../assets/iconWhats.png';

import './styles.css'

export default function Footer() {
    return(
        <div>
                <div>
                    <a href="https://api.whatsapp.com/send?phone=5511995327532" target="_blank"><img src={iconWhats} alt="Icone Whats"/></a>
                    <a href="mailto:iaravidal1973@gmail.com"><img src={iconEmail} alt="Icone E-mail"/></a>
                </div>
                <p>&copy; 2020. Todos os direitos reservados</p> 
        </div>
        
    );
}
    