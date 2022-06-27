import "./SearchInput.scss";

function SearchInput({ theme, onChange }: { theme: string, onChange: any }) {
  return (
    <>
      <div className="input-icons">
        <i className={`fa-solid fa-magnifying-glass icon ${theme}`}></i>
        <input
          type="text"
          placeholder="Search for a country..."
          className={`input-field ${theme}`}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default SearchInput;
