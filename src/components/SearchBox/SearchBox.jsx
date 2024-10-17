import { useDispatch } from 'react-redux';
import css from './SearchBox.module.css'
import { useId } from 'react'
import { changeFilters } from '../../redux/filters/filtersSlice';

export const SearchBox = () => {
    const searchBoxId = useId();

    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(changeFilters(e.target.value))
    }

    return (
        <form className={css.search_box}>
        <label htmlFor={searchBoxId}>Find contacts by name</label>
            <input type="text" name="search" id={searchBoxId} onChange={handleChange}/>
        </form>
    )
}