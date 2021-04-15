import React from 'react';
import editIcon from '../assets/images/edit-icon.png';
import deleteIcon from '../assets/images/delete-icon.png';
import starSolid from '../assets/images/star-solid.png';

function CardMusica(props) {
    return (
        <>
            <div className="music-box">
                <div className="img-music"></div>
                <div className="music-data">
                    <div className="icons">
                        <img src={editIcon} alt="" className="edit" />
                        <img src={deleteIcon} alt="" className="delete" />
                        <img src={starSolid} alt="" className="stars" />
                    </div>
                    <div className="name">
                        <label> Nome:
                            <input className="input-music" type="text" defaultValue={props.nome} />
                        </label>
                    </div>
                    <div className="genre">
                        <label> Genêro:
                            <input className="input-music" type="text" defaultValue={props.genero} />
                        </label>
                    </div>
                    <div className="release">
                        <label> Lançamento:
                            <input className="input-music" type="text" defaultValue={props.lancamento} />
                        </label>
                    </div>
                </div>
            </div>
        </>

    );
}

export default CardMusica;