import { faker } from '@faker-js/faker';
import { PencilLine } from 'phosphor-react';

import styles from './sidebar.module.css';
import { Avatar } from '../Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src={faker.image.url({ width: 500 })}
        alt=""
        className={styles.cover}
      />

      <div className={styles.profile}>
        <Avatar src={faker.image.avatar()} />
        <strong>{faker.person.fullName()}</strong>
        <span>{faker.person.jobTitle()}</span>
      </div>

      <footer>
        <a href={'#'}>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
