import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

type Transactions = {
  id: number,
  title: string,
  type: string,
  category: string,
  amount: number,
  createdAt: string
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    // fetch('http://localhost:3000/api/transactions')
    //   .then(res => res.json())
    //   .then(data => console.log(data))

    api.get('transactions')
      .then(res => setTransactions(res.data.transactions));
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