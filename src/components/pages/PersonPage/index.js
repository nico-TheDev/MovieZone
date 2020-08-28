import React from "react";

import usePersonMedia from "../../../hooks/usePersonMedia";
import PersonProfile from "./PersonProfile";
import PersonMedia from "./PersonMedia";
import ProfileSkeleton from './ProfileSkeleton';

export default function Person({
    match: {
        params: { id },
    },
}) {
    const { data, isLoading, hasError } = usePersonMedia(id);

    if (isLoading) return <ProfileSkeleton/>;
    if (hasError) return "Error person";

    return (
        <>
            <PersonProfile id={id} bg={data} />
            <PersonMedia media={data.slice(0, 5)} />
        </>
    );
}
