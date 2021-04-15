import React from 'react';
import NavBar from '../components/NavBar';
import CardMusica from '../components/CardMusica';

function MinhasMusicas() {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="filter">
                    <button className="btn-green right">Adicionar</button>
                </div>
            </div>
            <div className="container">
                <div className="music-boxes">

                    <CardMusica nome="Billie Jean" genero="Pop" lancamento="1982"/>
                    <CardMusica nome="Melhor eu ir" genero="Pagode" lancamento="2015"/>
                    <CardMusica nome="Admiravel chip novo" genero="Pop" lancamento="2003"/>
                    <CardMusica nome="DNA" genero="K-Pop" lancamento="2017"/>
                    
                </div>

            </div>

        </>
    );
}

export default MinhasMusicas;