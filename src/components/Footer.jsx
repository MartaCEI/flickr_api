import React from 'react';
import { Link } from 'react-router-dom';
import Frame from '../assets/Frame.png';
import svg from '../assets/svg.png';


const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer-container">
                <ul className="Footer-ul">
                    <li className="Footer-li">
                        <Link className="Footer-a" to="#" target='__blank'>FAQ</Link>
                    </li>
                    <li className="Footer-li">
                        <Link className="Footer-a" to="#" target='__blank'>Contacto</Link>
                    </li>
                    <li className="Footer-li">
                        <Link className="Footer-a" to="#" target='__blank'>Términos y condiciones</Link>
                    </li>
                    <li className="Footer-li">
                        <Link className="Footer-a" to="#" target='__blank'>Privacidad</Link>
                    </li>
                </ul>
                <ul className="Footer-ul">
                    <li className="Footer-li">
                        <Link className="Footer-a" to="#" target='__blank'>
                        <img src={svg} alt="twetter" />
                        </Link>
                    </li>
                    <li className="Footer-li">
                        <Link className="Footer-a" to="#" target='__blank'>
                            <img src={Frame} alt="mail" />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;