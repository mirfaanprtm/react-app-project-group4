import Carbon from '../assets/carbon.svg'
import Foto from '../assets/foto.svg'
import styles from './AboutStyle.js'

function About() {
    return (
        <div style={styles.container}>
            <div style={styles.itemContainer}>
                <div>
                    <img src={Carbon} style={styles.Carbon} />
                    <span style={styles.text}>
                        Mari Kenali Kami dan Perjalanan Kami
                    </span>
                    <div style={styles.card}>
                        <p style={styles.paragraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={Foto} style={styles.foto} />
                    <span style={styles.namaFoto}>
                        Ir.H.Ady Setiawan.SH
                        <br />
                    </span>
                    <span style={styles.jabatanFoto}>
                        President of PDAM Purwa Tirta Dharma
                    </span>
                </div>
            </div>
            <button style={styles.button}>
                <span style={styles.textButton}>Lebih Lengkap</span>
            </button>
        </div>
    );
}

export default About;