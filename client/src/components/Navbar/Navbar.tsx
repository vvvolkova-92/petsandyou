'use client';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className={styles.wrapper}>
      <Link href="/" className={styles.logo}></Link>
      <nav className={styles.navbar}>
        <ul className={styles.menuItems}></ul>
      </nav>
    </header>
  );
};

export default Navbar;
