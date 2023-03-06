import { theme } from "@/styles/theme";
import { Stack } from "@mui/material";
import styled from "styled-components";

export const StyledCard = styled(Stack)`
    width: 100%;
    min-height: 300px;
    background-color: #fff;
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    justify-content: flex-start;
`
export const Qz = styled.div`
    background: ${theme.palette.primary.dark};
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    & h6{
        color: #fff;
    }
` 
