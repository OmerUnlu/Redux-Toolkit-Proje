import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { changeName, changeCost, changeDesc, cleanForm } from '../store/slices/formSlice';
import { addCourse } from '../store/slices/courseSlice';

const CourseForm = () => {
  const dispatch = useDispatch();
  const {name, desc, cost} = useSelector((state) => {
   return {
    name: state.form.name,
    desc: state.form.desc,
    cost: state.form.cost
  };
  })
  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(cleanForm())
    dispatch(addCourse({name,desc,cost}))
  }

  return (
    <>
      <div className="courseForm panel">
        <h4 className="subtitle is-3">Kitap Ekle</h4>
        <form onSubmit={handleSubmit}>
          <div className="field-group">
            <div className="field">
              <label className="label">Ad</label>
              <input className="input is-expanded" value={name} onChange={(e) =>{dispatch(changeName(e.target.value))}} />
            </div>
            <div className="field">
              <label className="label">Açıklama</label>
              <textarea className="input is-expanded" value={desc} onChange={(e) =>{dispatch(changeDesc(e.target.value))}} />
            </div>
            <div className="field">
              <label className="label">Fiyat</label>
              <input className="input is-expanded" type="number" value={cost} onChange={(e) =>{dispatch(changeCost( parseInt(e.target.value)))}} />
            </div>
          </div>
          <div className="field">
            <button className="button is-primary">Kaydet</button>
          </div>
          
        </form>
      </div>
    </>
  )
}

export default CourseForm