import styles from './LinkButton.module.css'
import {Link} from 'react-router-dom'

const LinkButton = ({to, text}) => {
    return ( <>
    <Link className={styles.btn} to={to}>
        {text}
    </Link>
    </>);
}
 //'to' é um link dinamico como uma variavel de uma função mesmo, o mesmo vale para o text
export default LinkButton;