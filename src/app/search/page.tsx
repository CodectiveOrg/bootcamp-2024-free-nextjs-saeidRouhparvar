"use client";

import React from "react";
import { FilterProvider } from "./provider/filter.provider";
import Search from "./main-search/search";

const Page = () => {
  return (
    <div className="" style={{ height: "100vh" }}>
      <FilterProvider>
        <Search />
      </FilterProvider>
    </div>
  );
};

export default Page;
