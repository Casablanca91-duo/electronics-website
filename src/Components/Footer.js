    'use strict'

import { Link } from "react-router-dom"


    function Footer () {
        return (
            <footer>
                    <nav style={{listStyle: "none", padding: 0}}>
                        <li><Link to="/">Главная</Link></li>
                    </nav>
                <ul>
                    <li><a href="https://vk.com/filimonchik91" target="_blank" rel="noopene noreferrer">VK</a></li>
                    <li><a href="https://www.twitch.tv/casablanca_91" target="_blank" rel="noopene noreferrer">Twitch</a></li>
                </ul>
                <p>Контактная информация</p>
            </footer>
        )
    }

    export default Footer