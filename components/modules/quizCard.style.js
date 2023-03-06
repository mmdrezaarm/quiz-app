import { theme } from "@/styles/theme";
import { Stack } from "@mui/material";
import styled from "styled-components";

export const StyledCard = styled(Stack)`
    width: 800px;
    min-height: 300px;
    background-color: #fff;
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    justify-content: space-between;
    @media screen and (max-width: 900px) {
        width: 100%;
    }
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

export const ActionBtn = styled(Stack)`
    padding: 10px;
    background-color: ${theme.palette.secondary.light};
    flex-direction: row !important;
    justify-content: space-between;
`