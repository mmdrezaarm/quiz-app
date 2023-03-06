import { theme } from "@/styles/theme";
import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledBox = styled(Box)`
  border: 1px solid ${theme.palette.primary.main};
  border-radius: 24px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;
