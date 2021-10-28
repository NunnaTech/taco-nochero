import React from "react";
import Menu from './Menu'
import SectionBody from "./SectionBody";
import SectionFooter from "./SectionFooter";
import SectionHeader from './SectionHeader'
const LandingPage = () => {
    return (
        <>
            <Menu />
            <SectionHeader />
            <SectionBody />
            <SectionFooter />
        </>
    )
}

export default LandingPage;