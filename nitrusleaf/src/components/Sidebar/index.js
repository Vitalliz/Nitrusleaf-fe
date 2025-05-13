import styles from './Sidebar.module.css';
import { FaBars, FaHome, FaChartBar, FaProjectDiagram, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.iconGroup}>
        <FaBars className={styles.icon} />
        <hr className={styles.separator} />
        <FaHome className={styles.icon} />
        <FaChartBar className={styles.icon} />
        <FaProjectDiagram className={styles.icon} />
        <hr className={styles.separator} />
        <FaCog className={styles.icon} />
        <FaSignOutAlt className={styles.icon} />
      </div>
    </aside>
  );
}
