"use client";

import React, { useEffect, useState } from "react";
import GlobalSearch from "@/components/global-search/global-search";
import MainBox from "@/components/main-box/main-box";
import clsx from "clsx";
import { doctors } from "@/config/doctor";
import { DoctorModel } from "@/types/doctor.model";
import { Button } from "@/components/uiKit/Button";
import { useFilterContext } from "../provider/filter.provider";
import DrCard from "../dr-card/dr-card";
import Tag from "@/components/tag/Tag";

import style from "./page.module.css";
import { Select } from "@/components/uiKit/select/select";

const Search = () => {
  const [results, setResults] = useState<DoctorModel[]>([]);

  useEffect(() => {
    setResults(doctors);
  }, []);

  const briefData = Array.from(new Set(doctors.map((item) => item.brief)));

  const { filterKey, setFilterKey } = useFilterContext();

  const filteredDoctors = filterKey
    ? results.filter((doctor) => doctor.brief === filterKey)
    : results;

  return (
    <div className={style.main}>
      <GlobalSearch data={doctors} setResults={setResults} />
      <div className={style.search}>
        <div className={style.sidebar}>
          {filterKey && (
            <MainBox className={style.filters}>
              <Tag onClick={() => setFilterKey("")}>{filterKey}</Tag>
            </MainBox>
          )}
          <MainBox className={style.filter_list}>
            {briefData?.map((item, index) => (
              <Button
                key={index}
                variant="text"
                className="filter-items"
                onClick={() => setFilterKey(item)}
              >
                {item}
              </Button>
            ))}
          </MainBox>
        </div>

        <div className={clsx(style.main_content, "sidebar")}>
          <div className={style.filters}>
            <div className={style.filter}>
              <div className={style.title}>مرتب سازی:</div>
              <Select
                options={[
                  { id: 0, title: "خوش برخورد", value: "" },
                  { id: 1, title: "کمترین معطلی", value: "" },
                ]}
                placeholder="مرتب سازی بر اساس"
              />
            </div>
            <div className={style.res}>{filteredDoctors.length} نتیجه</div>
          </div>
          <div className={style.lists}>
            {filteredDoctors.map((doctor: DoctorModel) => (
              <DrCard
                key={doctor.id}
                address={doctor.address}
                avatar={`https://cdn.paziresh24.com/${doctor.image}`}
                drName={doctor.name}
                drDesc={doctor.brief}
                tag={doctor.badges}
                getVisit={doctor.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
