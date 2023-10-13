import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { changeSearchTerm } from '../store/slices/courseSlice';

const CourseSearch = () => {

 const searchTemer = useSelector((state) =>{
          return state.courses.searchTerm
 });
  const dispatch = useDispatch()


  return (
    <>
      <div className='listHeader'>
        <h3 className='title is-3'>Kitaplarım</h3>
        <div className="search field is-horizontal">
            <label className="label">Ara:</label>
            <input className="input" value={searchTemer} onChange={(e) => dispatch(changeSearchTerm(e.target.value)) }/>
        </div>
      </div>
    </>
  )
}

export default CourseSearch