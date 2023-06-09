import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './styles/app.module.css';
import './styles/global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>posts</main>
      </div>
    </div>
  );
}
