const styles = {
  container: (bgColor) => {
    return {
      height: 80,
      backgroundColor: bgColor,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 70px",
      width: "100%",
      position: "fixed",
      boxSizing: "border-box",
      zIndex: 999,
    };
  },
  menu: {
    fontFamily: "Quicksand",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 18,
    lineWeight: 22,
    color: "white",
    margin: "0 15px",
    textDecoration: "none",
  },
  searchItem: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    border: "none",
    marginRight: 10,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 5,
    border: "none",
    fontFamily: "Quicksand",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 14,
    padding: 9,
    color: "#157599",
    justifyContent: "center",
    alignItems: "center",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default styles;
