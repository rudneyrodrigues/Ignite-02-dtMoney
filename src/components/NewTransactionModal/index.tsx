import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { api } from '../../services/api';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose?: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('deposit');
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    if (value <= 0) {
      return alert('Insira um valor maior que zero')
    }

    const data = {
      title: title,
      value: value,
      type: type,
      category: category
    }

    api.post('/transactions', data)
      .then(
        () => {
          return alert('Cadastro efetuado com sucesso');
        }
      )

    // return (
    //   alert('Cadastro efetuado com sucesso')
    // );
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <button
          type="button"
          className="close-modal"
          onClick={onRequestClose}
        >
          <AiOutlineClose />
        </button>

        <h2>Cadastrar transação</h2>

        <input
          type="text"
          className="title"
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          className="amount"
          placeholder="Valor"
          min={1}
          onChange={e => setValue(Number(e.target.value))}
          required
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={ type === 'deposit' }
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={ type === 'withdraw' }
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          className="category"
          placeholder="Categoria"
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}