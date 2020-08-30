import React from "react";

import usePersonMedia from "../../../hooks/usePersonMedia";
import PersonProfile from "./PersonProfile";
import PersonMedia from "./PersonMedia";
import ProfileSkeleton from "./ProfileSkeleton";

export default function Person({
    match: {
        params: { id },
    },
    history,
}) {
    const { data, isLoading, hasError } = usePersonMedia(id);

    if (isLoading) return <ProfileSkeleton />;

    if (hasError) {
        history.push(`/error/${hasError}`);
        return;
    }

    return (
        <>
            <PersonProfile id={id} bg={data} />
            <PersonMedia media={data.slice(0, 5)} />
        </>
    );
}
