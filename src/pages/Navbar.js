import logo from "../assets/logo.png";
import searchIcon from "../assets/Vector.png";
import styles from "./NavbarStyle";
import React from "react";

const MENU = [
  { href: "#", label: "Beranda" },
  { href: "#", label: "Tentang" },
  { href: "#", label: "Galeri" },
  { href: "#", label: "Blog" },
];

const Navbar = () => {
  const [bgColor, setBgColor] = React.useState("transparent");
  const [isScroll, setScroll] = React.useState(false);
  //   const [scrollDelay, setScrollDelay] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setScroll(true) : setScroll(false);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  React.useEffect(() => {
    setBgColor(isScroll ? "#157599" : "transparent");
  }, [isScroll]);

  //   const listenScrollEvent2 = () => {
  //     window.scrollY > 10 ? set(true) : setScroll(false);
  //   };

  //   React.useEffect(() => {
  //     const handleScroll = () => {
  //       setTimeout(() => {
  //         if (window.pageYOffset > 0) {
  //           setScrollDelay(true);
  //         } else {
  //           setScrollDelay(false);
  //         }
  //       }, 500);
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <div style={styles.container(bgColor)}>
      <div onClick={() => setBgColor("#157599")}>
        <img src={logo} />
      </div>
      <div>
        {MENU.map((item, idx) => {
          return (
            <a href={item.href} style={styles.menu} key={idx}>
              {item.label}
            </a>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={searchIcon} style={styles.searchItem} />
        <button style={styles.button}>Customer Service</button>
      </div>
    </div>
  );
};

export default Navbar;
