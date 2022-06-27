import "./SelectRegion.scss";

function SelectRegion({ theme, onChange }: { theme: string; onChange: any }) {
  return (
    <>
      <select
        name="region"
        id="region"
        className={`${theme}`}
        onChange={onChange}
      >
        <option value="">All</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </>
  );
}

export default SelectRegion;
