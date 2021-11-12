import { render, screen } from '@testing-library/react';
import App from './App';

describe('Testes da api Random dog', () => {
  beforeEach(()=>{
    render(<App/>)
  })

  test('Verifica se aparece o texto Random Dog na tela', () => {
    const title = screen.getByRole('heading', {
      name: /Random Dog/i,
      level: 1,
    })
    expect(title).toBeInTheDocument()
  })
  test('Verifica se o botão aparece na tela', () => {
    const title = screen.getByRole('button', {
      name: /Clique!!/i,
    })
    expect(title).toBeInTheDocument()
  })
})
