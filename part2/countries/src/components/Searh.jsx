function Search({searching, handleSearch}){
return (
    <form>
        <h1>FIND COUNTRIES</h1>
        <input value={searching} onChange={handleSearch}></input>
    </form>
)
}

export default Search