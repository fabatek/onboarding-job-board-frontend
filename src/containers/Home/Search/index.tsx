import "./style.scss"
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { searchAction } from "../../Redux/search/searchSlice";
function Search() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("");
    const [city , setCity] = useState("")
    const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const handleSelect = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setCity(event.target.value)
    }
    const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(searchAction({title,city}))
        event.preventDefault()
    }
    return (
        <div className='bg-dark text-light'>
            <div className='container'>
                <div className="container-fluid py-5 row">
                    <div className='col-2 search__selection'>
                        <select onChange={handleSelect}>
                            <option value={"All"}>All Cities</option>
                            <option value={"Ho Chi Minh"}>Ho Chi Minh</option>
                            <option value={"Ha Noi"}>Ha Noi</option>
                            <option value={"Da Nang"}>Da Nang</option>

                        </select>
                    </div>
                    <div className='col-10' data-testid='jobTest'>
                        <form className="d-flex">
                            <input onChange={handleOnchange} className="form-control me-2" type="text" placeholder="Search" aria-label="Search" />
                            <button onClick={handleSearch} className="btn btn-danger" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search;