import React, { useState } from 'react';

export function Login({ irParaCadastro, irParaTurmas }) {
  const [email, atualizarEmail] = useState('');
  const [senha, atualizarSenha] = useState('');

  const fazerLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('senha', senha);

    try {
      const res = await fetch('http://127.0.0.1:5000/login', { method: 'POST', body: formData });
      const data = await res.json();
      alert(data.mensagem);
      if (res.ok) irParaTurmas();
    } catch (error) {
      alert(`Não foi possível realizar o login: ${error.message}`);
    }
  };

  const inputStyle = { width: '100%', padding: '15px', borderRadius: '12px', border: 'none', marginBottom: '20px', fontSize: '16px', outline: 'none', boxSizing: 'border-box' };
  const btnStyle = { width: '100%', padding: '15px', borderRadius: '12px', border: 'none', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' };

  return (
    <div style={{ backgroundColor: '#ccc', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', color: '#666' }}>
      <form onSubmit={fazerLogin} style={{ width: '300px' }}>
        <p style={{ margin: '0 0 5px 5px' }}>email</p>
        <input type="email" value={email} onChange={e => atualizarEmail(e.target.value)} placeholder="coloque seu email aqui" style={inputStyle} required />
        
        <p style={{ margin: '0 0 5px 5px' }}>senha</p>
        <input type="password" value={senha} onChange={e => atualizarSenha(e.target.value)} placeholder="coloque sua senha aqui" style={inputStyle} required />
        
        <button type="submit" style={{ ...btnStyle, backgroundColor: '#777' }}>Entrar</button>
        <button type="button" onClick={irParaCadastro} style={{ ...btnStyle, backgroundColor: '#5d4bdb' }}>Cadastra-se já</button>
      </form>
    </div>
  );
}