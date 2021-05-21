import { BsPlus } from 'react-icons/bs';
import logoImg from '../../assets/logo.svg';

import {
  Container,
  Content
} from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          <BsPlus /> <p>Nova transação</p>
        </button>
      </Content>
    </Container>
  )
}