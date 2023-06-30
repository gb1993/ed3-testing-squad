import {render, screen} from '@testing-library/react'
import App from "../App";

describe('Testa o h1', () => {
  it('validar se o h1 é renderizado', () => {
    render(<App />)
    expect(screen.getByRole('heading'))
    .toBeInTheDocument()
  })
  it('validar se o texto do h1 esta de acordo', () => {
    render(<App />)
    expect(screen.getByRole('heading', {name: 'Vite + React'}))
    .toBeInTheDocument()
  })
})