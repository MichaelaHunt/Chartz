import "./Components.css";



function Searchbar() {
    return (
        <>
            <div className="searchBar">
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
                <input placeholder="Search for lyrics"></input>
            </div>
        </>
    );
}

export default Searchbar;