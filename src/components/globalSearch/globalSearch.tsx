"use client";

import MingcuteSearchLine from "@/icons/MingcuteSearchLine";
import style from "./globalSearch.module.css";
import { Button } from "../uiKit/Button";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";
import { ChangeEvent, ReactElement, useState } from "react";

type GlobalSearchProps = {
  data?: Array<Record<string, any>>;
  setResults?: (filteredData: Array<Record<string, any>>) => void;
};

const GlobalSearch = ({
  data,
  setResults,
}: GlobalSearchProps): ReactElement => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (data && setResults) {
      const lowercasedFilter = search.toLowerCase();
      const filteredArray = data?.filter((item) =>
        Object.keys(item)?.some((key) =>
          String(item[key]).toLowerCase().includes(lowercasedFilter),
        ),
      );
      setResults(filteredArray);
    }
    setSearch(e.target.value);
  };

  return (
    <div className={style.global}>
      <div className={style.prefix}>
        <MingcuteSearchLine className="svg" />
      </div>
      <input
        type="text"
        placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..."
        onChange={handleSearch}
      />
      <div className={style.divider}></div>
      <div className={style.suffix}>
        <MingcuteLocationLine className="svg" />
        <Button size="lg" variant="text" className={style.btn}>
          همه شهرها
        </Button>
      </div>
    </div>
  );
};

export default GlobalSearch;
