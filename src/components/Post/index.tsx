import { faker } from '@faker-js/faker';

import { Comment } from '../Comment';
import styles from './post.module.css';
import { Avatar } from '../Avatar';
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.authorContainer}>
          <Avatar src={faker.image.avatar()} />
          <div className={styles.authorInfo}>
            <strong>{faker.person.fullName()}</strong>
            <span>{faker.person.jobTitle()}</span>
          </div>
        </div>
        <time dateTime={faker.date.past().toString()}>Públicado há 1hr</time>
      </header>

      <div className={styles.content}>
        <p>{faker.lorem.paragraphs({ min: 1, max: 10 }, '\n\n')}</p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder={'Deixe um comentário'} />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className="commentList">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
