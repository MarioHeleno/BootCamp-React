import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import imgAdd from '../assets/images/add-music-img.png';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import api from '../api';

function EditMusic(props) {

    const [musicEdit, setMusicEdit] = useState({});
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        function getMusicById() {
            api.get(`/${id}`).then((res) => {
                console.log(res.data);
                setMusicEdit(res.data);
            }).catch((err) => {
                console.log(err);
            })
        }

        getMusicById()

    },[]);

    function handle(e) {
        const newMusic = { ...musicEdit };
        newMusic[e.target.id] = e.target.value;
        setMusicEdit(newMusic);
        console.log(newMusic);
    }

    function atualizar(e) {
        e.preventDefault();

        api.put(`/${id}`, musicEdit).then((res) => {
            if(res.status === 200) {
                // console.log("Resposta: ", res);
                alert("Musica alterada");
                history.push("/minhas-musicas");
            } else {
                alert("Opa! Algo deu errado")
            }
        }).catch((err) => {
            console.log("Erro: ", err);
        })
    }

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="add-music">
                    <form onSubmit={atualizar}>
                        <h1>Editar Musica</h1>
                        <div>
                            <label>Nome: 
                            <input type="text" id="nome" onChange={handle} value={musicEdit.nome} defaultValue={musicEdit.nome} /></label>
                        </div>
                        <div>
                            <label>Genêro: 
                            <input type="text" id="genero" onChange={handle} value={musicEdit.genero} defaultValue={musicEdit.genero} /></label>
                        </div>
                        <div>
                            <label>Ano Lançamento:</label>
                            <input type="text" id="ano" onChange={handle} value={musicEdit.ano} defaultValue={musicEdit.ano} />
                        </div>

                        <div>
                            <label> Imagem (url):</label>
                            <input type="text" id="url" onChange={handle} value={musicEdit.url} defaultValue={musicEdit.url} />
                        </div>
                        <div>
                            <button className="btn-green left" type="submit" >ATUALIZAR</button>
                            <Link to="/minhas-musicas">
                                <button className="btn-green right" >Voltar</button>
                            </Link>
                        </div>
                    </form>
                    <img src={imgAdd} alt="" />
                </div>
            </div>

        </>
    );
}

export default EditMusic;