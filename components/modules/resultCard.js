import { Box, Typography } from "@mui/material";
import { Qz, StyledCard } from "./resultCard.style";

export default function ResultCard({ quiz, children }) {
  return (
    <>
      <StyledCard>
        <Qz>
          <Typography variant="subtitle1">Quiz : {quiz}</Typography>
        </Qz>
        <Box p={5} boxSizing={"border-box"}>
          {children}
        </Box>
      </StyledCard>
    </>
  );
}
