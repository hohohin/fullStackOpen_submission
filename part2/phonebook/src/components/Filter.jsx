function Filter({searching, handleSearch}){
    return(
        <>
          search: <input value={searching} onChange={handleSearch}/>
        </>
    )
}

export default Filter