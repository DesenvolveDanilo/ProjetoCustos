import styles from './Loanding.module.css'
import loanding from '../../img/loading.svg'
const Loading = () => {
    return ( <div className={styles.loader_container}>
    <img className={styles.loader} src={loanding} alt='loanding'/>

    </div> );
}
 
export default Loading;