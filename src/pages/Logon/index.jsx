import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){

    const [id, setId] = useState('');
    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault(); //evita a página recarregar

        try{
            const response = await api.post('sessions', { id });
            
            //console.log(response.data.name);
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
          
            navigate('/profile'); //redireciona para a página profile

        }catch(err){
            console.log(err)
            alert('Falha no login, tente novamente. ' + err.response.data.error);
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
        
    );
}