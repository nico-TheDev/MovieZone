import React from "react";

import { ChoiceHolder } from "./styles";
import ListSkeleton from "../ListSkeleton";
import { useAuth } from "contexts/AuthContext";
import GuestSlider from "../GuestList/GuestSlider";

export default function GuestList() {
    const {
        state: { guestMedia },
    } = useAuth();

    if (!guestMedia) return <ListSkeleton />;

    return (
        <>
            <ChoiceHolder />
            <GuestSlider />
        </>
    );
}