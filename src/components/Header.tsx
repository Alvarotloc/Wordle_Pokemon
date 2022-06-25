import styles from "../styles/Header.module.css";
const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__titulo}>¡Bienvenido a <span className={styles.header__span}>Pokdle!</span></h1>
      <p className={styles.header__primerParrafo}>¡Te damos la bienvenida al juego de moda!</p>
      <p>
        Consigue <span className={styles.header__span}>adivinar</span> el nombre del pokémon para llevarte el punto diario
      </p>
    </header>
  );
};

export default Header;
