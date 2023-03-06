import { theme } from "@/styles/theme";
import { FormControlLabel } from "@mui/material";
import styled from "styled-components";

export const StyledRadioLabel =  styled(FormControlLabel)`
    border: 1px solid ${theme.palette.primary.main};
    border-radius: 24px;
    width: 100%;
`