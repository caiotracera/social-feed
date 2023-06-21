import { Comment } from '../Comment';
import { Avatar } from '../Avatar';

import styles from './post.module.css';
import { PostProps } from './types';

export function Post({ author, comments, content, publishedAt }: PostProps) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.authorContainer}>
          <Avatar src={author.avatar_url} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time dateTime={publishedAt}>Públicado há 1hr</time>
      </header>

      <div className={styles.content}>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder={'Deixe um comentário'} />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className="commentList">
        {comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
    </article>
  );
}
