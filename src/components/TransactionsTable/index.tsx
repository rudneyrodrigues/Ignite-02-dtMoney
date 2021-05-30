import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from './styles';

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);
  
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
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td className="title">{transaction.title}</td>
                <td className={`${transaction.type} amount`}>
                  {/* Formatando moeda para PT-BR */}
                  {new Intl.NumberFormat('pt-br', {
                    style: 'currency', //Formato de moeda
                    currency: 'BRL'
                  }).format(transaction.amount)}
                </td>
                <td className="category">{transaction.category}</td>
                <td className="date">
                  {new Intl.DateTimeFormat('pt-br').format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  );
}