import React from "react";
import Menu from "./Menu";
import SectionBody from "./SectionBody";
import SectionFooter from "./SectionFooter";
import SectionHeader from "./SectionHeader";
import FloatingButtons from "../float_page/FloatingButtons";

const LandingPage = () => {
    return (
        <>
            <Menu />
            <SectionHeader />
            <SectionBody />
            <SectionFooter />
            <FloatingButtons />
        </>
    );
};

export default LandingPage;
