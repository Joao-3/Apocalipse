export function Turmas({ voltar, irParaAlunos }) {
  const btn = { border: 'none', color: 'white', fontWeight: 'bold', cursor: 'pointer', borderRadius: '12px', padding: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' };
  const turmas = [...Array(7)].map((_, i) => `turma ${i + 1}`); // fé
  const dados = [
    ['baixa', 'nenhum', 'media', 'media', 'media', 'baixa'],
    ['media', 'media', 'media', 'media', 'media', 'baixa'],
    ['media', 'media', 'media', 'alta', 'media', 'alta'],
    ['baixa', 'baixa', 'alta', 'alta', 'alta', 'baixa'],
    ['grave', 'media', 'alta', 'alta', 'alta', 'alta'],
  ];

  return (
    <div style={{ background: '#d6d6d6', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', position: 'relative' }}>
      
      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          {turmas.map(t => (
            <button key={t} onClick={irParaAlunos} style={{ background: '#a3a3a3', border: 'none', padding: '15px 20px', borderRadius: '8px', fontSize: '18px', color: '#111', cursor: 'pointer', textAlign: 'left', minWidth: '100px' }}>
              {t}
            </button>
          ))}
        </div>

        <div style={{ background: 'white', borderRadius: '12px', padding: '10px 0', minWidth: '600px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '18px', color: '#333' }}>
            <tbody>
              {dados.map((row, i) => (
                <tr key={i} style={{ borderBottom: i < dados.length - 1 ? '1px solid #eee' : 'none' }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: '20px', textAlign: 'left' }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <button onClick={voltar} style={{ ...btn, background: '#5d4bdb', position: 'absolute', bottom: '50px', left: '50px', padding: '15px 40px' }}>volte</button>
    </div>
  );
}