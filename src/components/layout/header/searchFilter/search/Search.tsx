import styles from "./Search.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { AppDispatch } from "@/lib/redux/store";
import usePlacesAutocomplete from "use-places-autocomplete";
import { useDispatch } from "react-redux";
import { setSearchSelected } from "@/lib/redux/slices/search-selected-slice";
import { Libraries, useGoogleMapsScript } from "use-google-maps-script";

export default function Search() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY;
  if (!apiKey) throw new Error("NEXT_PUBLIC_GOOGLE_PLACE_API_KEY missing");

  const libraries: Libraries = ["places"];

  const { isLoaded, loadError } = useGoogleMapsScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
    requestOptions: {
      componentRestrictions: { country: "PH" },
      types: ["lodgings"],
    },
  });

  const dispatch = useDispatch<AppDispatch>();

  if (!isLoaded) return null;
  if (loadError)
    return (
      <>
        <h1>Error</h1>
      </>
    );

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
