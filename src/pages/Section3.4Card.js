import styles from "./Section3.4CardStyle"


const SectionCard = () => {
    return (
        <div style={styles.outer}>
            <div style={styles.inner}>
                <div style={styles.textAndButtonWrapper}>
                    <h1 style={styles.title}>
                        layanan berkualitas tinggi untuk <br/>
                        masyarakat indonesia
                    </h1>
                    <p style={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

                    <div style={styles.buttonWrapper}>
                        <button style={{...styles.button, ...styles.button1}}>Kontak Kami</button>
                        <button style={{...styles.button, ...styles.button2}}>Konsultasi</button>
                    </div>
                </div>
                    <div style={styles.image}>
                    </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default SectionCard