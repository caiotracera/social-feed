import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import posts from './mocks/posts.json';
import styles from './styles/app.module.css';
import './styles/global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </main>
      </div>
    </div>
  );
}
