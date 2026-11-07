import React, { useState } from 'react';

export function Cadastro({ voltar, irParaTurmas }) {
  // useState = [email, atualizarEmail]
  const [email, atualizarEmail] = useState('');
  const [senha, atualizarSenha] = useState('');
  const [confirma, atualizaConfirma] = useState('');

  const fazerCadastro = async (e) => {
    e.preventDefault();
    if (senha !== confirma) return alert("Senha/Confirmar errado(s)");

    const formData = new FormData();
    formData.append('email', email);
    formData.append('senha', senha);

    try {
      const res = await fetch('http://127.0.0.1:5000/cadastro', { method: 'POST', body: formData });
      const data = await res.json();
      alert(data.mensagem);
      if (res.ok) irParaTurmas();
    } catch (error) {
      alert(`Não foi possível concluir o cadastro: ${error.message}`);
    }
  };

  const inp = { width: '100%', padding: '15px', borderRadius: '12px', border: 'none', marginBottom: '15px', outline: 'none', boxSizing: 'border-box', fontSize: '14px', color: '#666' };
  const btn = { padding: '15px', borderRadius: '12px', border: 'none', color: 'white', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' };
  const lbl = { margin: '0 0 5px 5px', fontSize: '18px' };

  return (
    <div style={{ backgroundColor: '#d6d6d6', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', color: '#666', position: 'relative' }}>
      <form onSubmit={fazerCadastro} style={{ width: '350px' }}>
        <h1 style={{ textAlign: 'center', margin: '0 0 20px', fontWeight: 'normal', fontSize: '32px' }}>Cadastro</h1>
        
        <p style={lbl}>email</p>
        <input type="email" value={email} onChange={e => atualizarEmail(e.target.value)} placeholder="coloque seu email aqui" style={inp} required />
        
        <p style={lbl}>senha</p>
        <input type="password" value={senha} onChange={e => atualizarSenha(e.target.value)} placeholder="coloque sua senha aqui" style={inp} required />
        
        <p style={{ textAlign: 'center', margin: '15px 0', fontSize: '18px' }}>coloque o que você é</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
          {['diretor', 'professor', 'pai/mãe'].map(role => (
            <label key={role} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px' }}>
              <input type="checkbox" style={{ width: '18px', height: '18px', accentColor: '#5d4bdb' }} /> {role}
            </label>
          ))}
        </div>

        <p style={{ textAlign: 'center', margin: '0 0 10px', fontSize: '18px' }}>confirme sua senha</p>
        <input type="password" value={confirma} onChange={e => atualizaConfirma(e.target.value)} placeholder="coloque sua senha aqui" style={{ ...inp, marginBottom: '30px' }} required />

        <button type="submit" style={{ ...btn, backgroundColor: '#777', width: '100%', display: 'block' }}>Cadastrar</button>
      </form>

      <button onClick={voltar} style={{ ...btn, backgroundColor: '#5d4bdb', position: 'absolute', bottom: '50px', left: '50px', padding: '15px 40px' }}>volte</button>
    </div>
  );
}
