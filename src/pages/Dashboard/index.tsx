import React from 'react';

import logoImg from '../../assets/github-logo.svg';

import { Title, Form } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do respositório" />
      <button type="submit">Pesquisar</button>
    </Form>
  </>
);

export default Dashboard;
