import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "300px",
    marginRight: "80px",
    paddingLeft: "20px",
    paddingRight: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    fontSize: "3em",
    color: "#F8EFBA"
  },
  subtitle: {
    fontSize: "2.5em",
    color: "#F8EFBA"
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)"
  }
}));

export default useStyles;
