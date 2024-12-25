import MingcuteSearchLine from "@/icons/MingcuteSearchLine";
import style from "./globalSearch.module.css";
import { Button } from "../uiKit/Button";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";
import { ReactElement } from "react";

const GlobalSearch = (): ReactElement => {
  return (
    <div className={style.global}>
      <div className={style.prefix}>
        <MingcuteSearchLine className="svg" />
      </div>
      <input
        type="text"
        placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..."
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
