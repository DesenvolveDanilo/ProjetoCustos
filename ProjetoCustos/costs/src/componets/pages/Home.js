import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton';
//savings é um nome de variavel pode escolher qualquer um 



const Home = () => {
    return ( 
        <section className={styles.home_container}> 
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece agora a gerenciar seus projetos</p>
            <LinkButton to='/NewProject' text='criar projeto' />

            {/* <a href='/' target='_blank'>Criar Projeto</a> */}
            <img src={savings} alt='costs'/>
        </section>
    
        );
}
 
export default Home;