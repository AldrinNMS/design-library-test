import {Button} from "@mui/base";
import {styled} from "@mui/system";

export const MainBtn = styled(Button)(({theme}) => ({
  background: "#f2dfb7",
  width: "90px",
  padding: 10,
  ".MuiSvgIcon-root": {
    fontSize: "500%",
    color: "ef5b57",
  },
  "&:hover": {
    background: theme.palette.primary.main,
  },
}));



