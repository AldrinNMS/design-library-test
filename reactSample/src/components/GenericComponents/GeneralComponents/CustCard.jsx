import {Card} from "@mui/material";
import {styled} from "@mui/system";

export const CustCard = styled(Card)(({theme}) => ({
  borderRadius: "1rem",
  transition: "0.3s",
}));

export const CustCardTransp = styled(Card)(({theme}) => ({
  transition: "0.3s",
  backgroundColor: "transparent",
  border: "none",
}));
