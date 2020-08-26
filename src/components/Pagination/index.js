import React from "react";

import Icon from "../shared/Icon";
import getIcon from "../../util/getIcon";
import { PaginationContainer, Prev,Next, PaginationMain } from "./styles";

export default function Pagination({ setPageCount, pageCount,pageLimit }) {
    const goToPrev = () => {
        setPageCount((prevCount) => (prevCount -= 1));
    };

    const goToNext = () => {
        setPageCount((prevCount) => (prevCount += 1));
    };

    return (
        <PaginationMain pageCount={pageCount}>
            <PaginationContainer>
                <Prev onClick={goToPrev} pageCount={pageCount}>
                    <Icon>
                        <use href={getIcon("arrow-left")} />
                    </Icon>
                </Prev>

                <h2>Page {pageCount}</h2>

                <Next onClick={goToNext} pageCount={pageCount} pageLimit={pageLimit}>
                    <Icon>
                        <use href={getIcon("arrow-right")} />
                    </Icon>
                </Next>
            </PaginationContainer>
        </PaginationMain>
    );
}
