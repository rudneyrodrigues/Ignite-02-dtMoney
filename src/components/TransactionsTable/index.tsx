import { useEffect } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    // fetch('http://localhost:3000/api/transactions')
    //   .then(res => res.json())
    //   .then(data => console.log(data))

    api.get('transactions')
      .then(res => console.log(res.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Websites</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>17/05/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100,00</td>
            <td>Casa</td>
            <td>18/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}