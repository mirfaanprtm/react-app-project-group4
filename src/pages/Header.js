import phoneIcon from "../assets/telephone.png";
import iconTwitter from "../assets/twitter.png";
import iconInstagram from "../assets/instagram.png";
import iconFacebook from "../assets/facebook.png";
import iconYoutube from "../assets/youtube.png";
import iconSocmed from "../assets/Social Media.svg";
import IconLink from "./IconLink";
import styles from "./HeaderStyle";

const ICON_PROPS = [
  { src: iconSocmed, href: "#" },
  { src: iconFacebook, href: "https://facebook.com/" },
  { src: iconTwitter, href: "https://twitter.com/" },
  { src: iconInstagram, href: "https://instagram.com/" },
  { src: iconYoutube, href: "https://youtube.com/" },
];

const Header = () => {
  return (
    <div style={styles.container}>
      <div style={styles.itemContainer}>
        <div style={styles.leftSection}>
          <h1 style={styles.title}>
            Menjadi Perusahaan
            <br />
            Air Minum Modern
          </h1>
          <p style={styles.subTitle}>
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit, sed do eiusmod tempor
            <br />
            incididunt ut labore et dolore
          </p>
          <button style={styles.button}>
            <img src={phoneIcon} />
            <span style={styles.textButton}>Hubungi kami</span>
          </button>
        </div>
        <div style={styles.rightSection}>
          {ICON_PROPS.map((item, idx) => {
            return <IconLink key={idx} iconSrc={item.src} to={item.href} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
