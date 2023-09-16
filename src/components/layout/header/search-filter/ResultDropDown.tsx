import styles from "./ResultDropDown.module.css";

export default function ResultDropDown() {
  return (
    <div className={styles.results}>
      {results.map((result: PlaceDetailType) => (
        <div
          key={result.place_id}
          className={styles.options}
          onClick={() => {
            console.log("result:", result);
            dispatch(setSelectedDetail(result));
            setActive(false);
          }}
        ></div>
      ))}
    </div>
  );
}
