import banner from '../assets/295185765_124658540115276_99244873373535137.jpg';
import styles from '../components/Header.module.css';
import ScrollReveal from '../components/ScrollReveal';

function Header() {
  return(
    <div>
      <ScrollReveal />
      <figure>
        <img className={styles.header_container} src={banner}></img>
      </figure>
      <h2 className={styles.myText}>FrontEnd developer</h2>
    </div>
  )
}

export default Header;