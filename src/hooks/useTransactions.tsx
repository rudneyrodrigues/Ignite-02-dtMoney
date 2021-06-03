import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

type Transactions = {
  id: number,
  title: string,
  type: string,
  category: string,
  amount: number,
  createdAt: string
}

// interface TransactionInput {
//   title: string,
//   type: string,
//   category: string,
//   amount: number,
// }

// Ira utilizar a tipagem Transactions, omitindo as propriedades de ID e CREATEDAT
type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>;

type TransactionContextProvider = {
  children: ReactNode;
}

type TransactionsContextData = {
  transactions: Transactions[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext =  createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({children}: TransactionContextProvider) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(res => setTransactions(res.data.transactions));
  }, []);

  async function createTransaction(transaction: TransactionInput) {  
    await api.post('/transactions', {
      ...transaction,
      createdAt: new Date()
    })
      .then(
        (res) => {
          setTransactions([
            ...transactions,
            res.data.transaction
          ]);
          return (
            alert('Cadastro efetuado com sucesso')
          );
        }
      )
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}