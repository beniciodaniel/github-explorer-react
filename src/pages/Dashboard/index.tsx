import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do respositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/52285940?s=460&u=62458ff1b9ec02aac67bb56fed2eaadb0ad16b33&v=4"
          alt="Beni"
        />
        <div>
          <strong>backend-node-faceapp</strong>
          <p>Backend built in Node.js to be used in FaceApp</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/52285940?s=460&u=62458ff1b9ec02aac67bb56fed2eaadb0ad16b33&v=4"
          alt="Beni"
        />
        <div>
          <strong>backend-node-faceapp</strong>
          <p>Backend built in Node.js to be used in FaceApp</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/52285940?s=460&u=62458ff1b9ec02aac67bb56fed2eaadb0ad16b33&v=4"
          alt="Beni"
        />
        <div>
          <strong>backend-node-faceapp</strong>
          <p>Backend built in Node.js to be used in FaceApp</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
