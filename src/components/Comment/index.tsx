import { faker } from '@faker-js/faker';

import styles from './comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src={faker.image.avatar()} hasBorder={false} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{faker.person.fullName()}</strong>
              <span>Cerca de 1hr atrás</span>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{faker.lorem.paragraph()}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>{faker.number.int({ max: 100 })}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
