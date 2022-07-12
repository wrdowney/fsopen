const Filter = ({searchQuery, handleChangeQuery}) => {
    return (
        <div>
            filter shown with<input value={searchQuery} onChange={handleChangeQuery} />
        </div>
    );
}

export default Filter;