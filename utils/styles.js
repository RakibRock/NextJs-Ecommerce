import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    //change the style of a child element
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
});

export default useStyles;
