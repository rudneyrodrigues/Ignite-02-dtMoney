import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose?: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <button
          type="button"
          className="close-modal"
          onClick={onRequestClose}
        >
          <AiOutlineClose />
        </button>

        <h2>Cadastrar transação</h2>

        <input type="text" className="title" placeholder="Título" />
        <input type="number" className="amount" placeholder="Valor" />

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

        <input type="text" className="category" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}