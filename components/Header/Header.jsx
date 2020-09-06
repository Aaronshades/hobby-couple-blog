import Link from 'next/link';

import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav} role="navigation" aria-label="main navigation">
          <Link href="/">
            <a>Hobby Couple</a>
          </Link>
{/*           <Link href="/about">
            <a>About</a>
          </Link> */}
        </nav>
      </header>
    </>
  );
}
