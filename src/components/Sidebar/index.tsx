import { faker } from '@faker-js/faker';
import { PencilLine } from 'phosphor-react';

import styles from './sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src={faker.image.url({ width: 500 })}
        alt=""
        className={styles.cover}
      />

      <div className={styles.profile}>
        <img src={faker.image.avatar()} alt={''} className={styles.avatar} />
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
