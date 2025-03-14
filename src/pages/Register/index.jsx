import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const navigate = useNavigate(); //para redirecionar para outra página

    async function handleRegister(e){ //cadastro do usuário
        e.preventDefault(); //impede a página regarregar ao enviar o Formulário
        
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try{   
            //chama a API para cadastro
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id} (salve isso para Login)`);

            navigate('/'); //redireciona para página de Login
        
        }catch(err){
            alert('Erro no cadastro, tente novamente! ' + err.response.data.validation.body.message);
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                
                
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Já tenho cadastro
                    </Link>
                </section>
                
                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            placeholder="UF" style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                    
                </form>
            </div>
        </div>
    );
}