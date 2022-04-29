import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi'


export function SingInButton() {
    const isUserLoggedIn = true;
    
    
    return isUserLoggedIn ? ( 
        <button 
        type="button"
        className={styles.singInButton}
        >
           <FaGithub color="#04d361"/>
            João Gabriel
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : 
    (
        <button 
        type="button"
        className={styles.singInButton}
        >
           <FaGithub color="#EBA417"/>
            Sing in with Github
        </button>
    )
}
