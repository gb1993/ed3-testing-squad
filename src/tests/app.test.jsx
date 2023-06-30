import {render, screen} from '@testing-library/react'
import App from "../App";


describe('Teste para testar o teste', () => {
  it('Teste para validar jest', () => {
    expect(1).toBe(1)
  })
  it('Teste para validar RTL', () => {
    render(<App />)
  })
})