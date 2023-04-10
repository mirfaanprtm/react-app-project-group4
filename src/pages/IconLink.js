const styles = {
  space: {
    marginBottom: 30,
  },
};

const iconLink = (props) => {
  return (
    <a href={props.to}>
      <img style={styles.space} src={props.iconSrc} />
    </a>
  );
};

export default iconLink;
