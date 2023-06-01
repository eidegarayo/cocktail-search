'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import HamburgerButton from './HamburgerButton';
import { getCategoriesList } from '../../api/cocktails.api';
import styles from './Header.module.scss';

export default function Header() {
  const [categoryList, setCategoryList] = useState<string[]>([]);
  console.log('🚀 > file: Header.tsx:12 > Header > categoryList:', categoryList);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const categories = await getCategoriesList();
      setCategoryList(categories);
    };
    fetchData();
  }, []);

  return (
    <header className={styles.header}>

      <nav className={styles.navbar}>

        <div className={styles.navbar_menu}>

          <div className={styles.navbar_menu_logo}>
            <Link href="/">
              <Logo size="large" />
            </Link>
          </div>

          <HamburgerButton
            onClick={() => setShowMobileNavbar(!showMobileNavbar)}
            classActive={showMobileNavbar}
          />

          <div className={`${styles.navbar_menu_list} ${showMobileNavbar ? styles.active : ''}`}>
            <ul className={styles.navbar_menu_list_items}>
              <li className={styles.navbar_menu_dropdown}>
                Category
                {/* <ul className={styles.navbar_menu_dropdown_list}>
                  {
                    categoryList.map((category) => (
                      <li key={category}>
                        <Link href={`/category/${encodeURIComponent(category)}`}>{category}</Link>
                      </li>
                    ))
                  }
                </ul> */}
              </li>
              <li>
                <Link className={styles.navbar_link} href="/search">Search</Link>
              </li>
              <li>
                <span className={styles.navbar_link}>Test1</span>
              </li>
              <li>
                <span className={styles.navbar_link}>Test2</span>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </header>
  );
}
