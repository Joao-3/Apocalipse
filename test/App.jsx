import { useState } from 'react';
import { Login } from './login';
import { Cadastro } from './cadastro';
import { Turmas } from './turmas';
import { Alunos } from './alunos';
import { Aluno } from './aluno';
import React from 'react' // não tirar, senão dá erro de React is not defined

export function App() {
  const [tela, atualizarTela] = useState('Login');

  switch (tela) {
    case 'Cadastro':
      return <Cadastro voltar={() => atualizarTela('Login')} irParaTurmas={() => atualizarTela('Turmas')} />;
    case 'Turmas':
      return <Turmas voltar={() => atualizarTela('Login')} irParaAlunos={() => atualizarTela('Alunos')} />;
    case 'Alunos':
      return <Alunos voltar={() => atualizarTela('Turmas')} irParaAluno={() => atualizarTela('Aluno')} />;
    case 'Aluno':
      return <Aluno voltar={() => atualizarTela('Alunos')} />;
    default:
      return (
        <Login
          irParaCadastro={() => atualizarTela('Cadastro')}
          irParaTurmas={() => atualizarTela('Turmas')}
        />
      );
  }
}