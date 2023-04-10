import imageCard from "../assets/imagecard.png"
const styles = {
    outer: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column", 
        alignItems: "center",
    },
    inner: {
        display: "flex",
        width: "1000px",
        height: "478px",
        left: "178px",
        top: "3406px",
        justifyContent: "space-around",
        alignItems: "center",
        boxSizing: "border-box",

    },
    textAndButtonWrapper : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginLeft: "112px"

    },
    title: {
        width: "640px",
        height: "100px",
        left: "290px",
        top: "3515px",
        fontFamily: 'Quicksand',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "40px",
        lineHeight: "50px",
    },
    buttonWrapper: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "10px",
        width: "570px",
    },
    button: {
        width: 261,
        height: 71,
        left: "290px",
        top: "3704px",
        borderRadius: "8px",
        fontFamily: "Quicksand",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 25,
        lineHeight: "38px",
        border: "none",
    },
    button1: {
        background: "#157599",
        color: "white",
    },
    button2: {
        color: "#157599",
        border: "solid 3px #157599",
    },
    image: {
        width: "200px",
        height: "200px",
        left: "971px",
        top: "3521px",
        background: `url(${imageCard})`,
        borderRadius: "50%"
    },
    p: {
        fontFamily: 'Quicksand',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '25px'
      }
}

export default styles