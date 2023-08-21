import { Dispatch, SetStateAction, useRef, useState } from "react";
import styles from "./Search.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { AppDispatch, useAppSelector } from "@/lib/redux/store";
import usePlacesAutocomplete from "use-places-autocomplete";
import { getGeocode } from "@/lib/google-api/geocode";
import { MapType } from "@/lib/types/google-map-type";
import { useDispatch } from "react-redux";
import { setSearchSelected } from "@/lib/redux/slices/search-selected-slice";

export default function Search() {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "PH" },
      types: ["lodgings"],
    },
  });

  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <form className={styles.form} autoFocus={false} autoComplete="off">
        <label htmlFor="search">
          <SearchOutlinedIcon />
        </label>
        <input
          type="text"
          id="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
          className={styles.input}
        />
        <section>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <div
                key={place_id}
                className={styles.options}
                onClick={async () => {
                  dispatch(setSearchSelected(place_id));
                  clearSuggestions();
                }}
              >
                <p>{description}</p>
              </div>
            ))}
        </section>
      </form>
      {console.log(JSON.stringify(data))}
    </>
  );
}
