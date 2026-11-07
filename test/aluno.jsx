export function Aluno({ voltar }) {
  const b = { background: '#a3a3a3', padding: '15px', borderRadius: '8px', color: '#111', fontSize: '18px' };
  const btn = { border: 'none', color: 'white', fontWeight: 'bold', cursor: 'pointer', borderRadius: '12px', padding: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' };

  return (
    <div style={{ background: '#d6d6d6', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', position: 'relative' }}>
      
      <button style={{ ...btn, background: 'red', position: 'absolute', top: '30px', right: '30px' }}>denunciar pro<br/>conselho tutelar</button>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div style={b}>Histórico/Faltas do Aluno</div>
            <div style={{ background: 'white', padding: '10px', borderRadius: '8px' }}>
              <table style={{ borderCollapse: 'collapse', width: '250px', height: '120px' }}>
                <tbody>{[...Array(4)].map((_, i) => (
                  <tr key={i}>{[...Array(6)].map((_, j) => <td key={j} style={{ border: '2px solid #333' }}></td>)}</tr>
                ))}</tbody>
              </table>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={b}>Turma do aluno</div>
              <div style={{ ...b, width: '200px' }}>Nome do aluno</div>
            </div>
            <div style={{ ...b, width: '250px', textAlign: 'center' }}>Denúncias/Observações<br/>dos professores</div>
            <div style={{ background: '#a3a3a3', width: '250px', height: '150px', padding: '20px', boxSizing: 'border-box' }}>
              <ul style={{ margin: 0, paddingLeft: '15px', fontSize: '20px' }}>
                <li/><li/><li/><li/><li/><li/>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <button onClick={voltar} style={{ ...btn, background: '#5d4bdb', position: 'absolute', bottom: '50px', left: '50px', padding: '15px 40px' }}>volte</button>
    </div>
  );
}