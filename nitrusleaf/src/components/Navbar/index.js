import {Dropdown, CustomButton} from "@/components/Button/index";
import Image from "next/image";
import styles from '@/app/talhao/Navbar.module.css'


export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h3>aaaaa</h3>
            <CustomButton
                variant="dropdown"
                label="Editar Talhão"
                icon={true}
                onClick={() => alert("Editar Talhão")}
            />
        </nav>

    );
}

