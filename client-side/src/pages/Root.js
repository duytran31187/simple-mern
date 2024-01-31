import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { CssBaseline, Container } from '@mui/material'

const RootLayout = (props) => {

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <MainNavigation />
                <Outlet />
            </Container>
        </React.Fragment>
    )
};
export default RootLayout;