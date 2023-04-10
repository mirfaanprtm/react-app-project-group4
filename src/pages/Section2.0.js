import icon24Hours from "../assets/24hours.svg";
import iconCeklis from "../assets/ceklis.svg";
import iconHeadphone from "../assets/headphone.svg";
import styles from "./Section2.0Style";

const Section2 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "raw",
        height: "331px",
        justifyContent: "space-between",
      }}
    >
      <div style={styles.container}>
        <h1 style={styles.title}>Kenapa Memilih Kami?</h1>
        <p style={styles.subTitle}>
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit, sed do eiusmod tempor
        </p>
      </div>
      <div style={styles.container2}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={styles.border}>
            <img src={iconCeklis} style={styles.image} />
          </div>
          <p style={styles.text}>Profesional</p>
        </div>
      </div>
      <div style={styles.container3}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={styles.border}>
            <img src={icon24Hours} style={styles.image} />
          </div>
          <p style={styles.text}>24H Non-Stop</p>
        </div>
      </div>
      <div style={styles.container4}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={styles.border}>
            <img src={iconHeadphone} style={styles.image} />
          </div>
          <p style={styles.text}>Full Support</p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
