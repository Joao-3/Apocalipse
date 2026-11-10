import React from 'react'

export function Alunos({ voltar, irParaAluno }) {
  const box = { backgroundColor: '#a3a3a3', padding: '15px 20px', borderRadius: '8px', color: '#333', fontSize: '18px', textAlign: 'center' };
  const btnStyle = { padding: '15px', borderRadius: '12px', border: 'none', color: 'white', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' };
  
  const Row = ({ acao }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '40px' }}>
      <div style={{ ...box, minWidth: '150px' }}>{acao}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ ...box, padding: '10px 20px' }}>ano letivo</div>
        <div style={{ ...box, padding: '10px 20px' }}>turma</div>
      </div>
      <button type="button" onClick={irParaAluno} style={{ ...box, minWidth: '150px', border: 'none', cursor: 'pointer' }}>nome do aluno</button>
    </div>
  );

  return (
    <div style={{ backgroundColor: '#d6d6d6', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', position: 'relative' }}>
      
      <div style={{ marginBottom: '50px' }}>
        <Row acao="Adicione aluno" />
        <Row acao="Procure um aluno:" />
      </div>

      <button style={{ ...btnStyle, backgroundColor: '#777', padding: '15px 30px', borderRadius: '12px' }}>
        veja todas as chances<br/>de evasão escolar
      </button>

      <button onClick={voltar} style={{ ...btnStyle, backgroundColor: '#5d4bdb', position: 'absolute', bottom: '50px', left: '50px', padding: '15px 40px' }}>volte</button>
    </div>
  );
}
