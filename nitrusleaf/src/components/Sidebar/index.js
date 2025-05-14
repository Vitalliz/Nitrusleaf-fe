import styles from './Sidebar.module.css';
import { FaBars, FaHome, FaChartBar, FaProjectDiagram, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { MdMap } from 'react-icons/md';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.iconGroup}>
        <FaBars className={styles.icon} />
        <hr className={styles.separator} />
        <Link href="/dashboard">
        <FaHome className={styles.icon} />
        </Link>
        <Link href="/history">
        <FaChartBar className={styles.icon} />
        </Link>
        <Link href="/map">
        <MdMap className={styles.icon} />
        </Link>
        <hr className={styles.separator} />
        <FaCog className={styles.icon} />
        <FaSignOutAlt className={styles.icon} />
      </div>
    </aside>
  );
}
