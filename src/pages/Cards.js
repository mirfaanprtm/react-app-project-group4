import pictureWash from "../assets/wash-hand.png";
import pictureWash2 from "../assets/wastafel.png";
import picturePlate from "../assets/plate.png";
import styles from "./CardStyle";

const CARD_PROPS = [
  {
    src: pictureWash,
    href: "#",
    type: "Pengumuman",
    title: "Pemberhentian Air Mengalir Sementara Pada Daerah ...",
    color: "#DA2525",
  },
  {
    src: pictureWash2,
    href: "#",
    type: "Berita Terbaru",
    title: "PDAM Purwa Tirta Dharma memberikan bantuan ...",
    color: "#CCBC29",
  },
  {
    src: picturePlate,
    href: "#",
    type: "Pengumuman",
    title: "Tarif per-Bulan Naik Menjadi 10% Dari Tarif Normal ...",
    color: "#DA2525",
  },
];

const serve3Cards = (props, key) => {
  return (
    <div style={styles.cardButtonWrapper}>
      <div style={{...styles.spanBorder, background: props.color}}>
        <span style={styles.topButton}>{props.type}</span>
      </div>
      <div className="card" style={styles.card} key={props.key}>
        <img src={props.src} />
        <div className="card-body" style={styles.cardBody}>
          <h5 className="card-title" style={styles.h5}>
            {props.title}
          </h5>
          <a
            className="btn btn-primary"
            href={props.href}
            style={styles.cardButton}
          >
            Lebih Lanjut
          </a>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  let cardList = [];
  {
    CARD_PROPS.map((prop, key) => {
      cardList.push(serve3Cards(prop, key));
    });
  }
  return <div style={styles.cardsWapper}>{cardList}</div>;
};

export default Cards;
