import Header from 'components/Header'
import styles from './Home.module.scss'
import relogio from 'assets/inicial.png' 

export default function Home() {
    return (
        <Header
        titulo="Classificados Tech"
        descricao="Explore diversos tipos de produtos na melhor loja tech do Brasil"
        imagem={relogio}
        className={styles.header}
        />
    )
}