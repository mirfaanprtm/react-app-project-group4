import background from "../assets/background.png";

const styles = {
  container: {
    backgroundImage: `url(${background})`,
    maxHeight: "693px",
    backgroundSize: "cover",
    padding: "169px 75px",
    boxSizing: "border-box",
  },
  itemContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Quicksand",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "50px",
    lineWeight: "62px",
    color: "white",
  },
  subTitle: {
    fontFamily: "Quicksand",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 30,
    lineWeight: 38,
    color: "white",
    margin: "22px 0",
  },
  button: {
    width: 261,
    height: 71,
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#157599",
    borderRadius: 5,
  },
  textButton: {
    fontFamily: "Quicksand",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 25,
    lineWeight: 38,
    color: "#157599",
    marginLeft: 8,
  },
  iconTelphone: {
    width: 24,
    height: 24,
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    margin: 20,
  },
};

export default styles;
