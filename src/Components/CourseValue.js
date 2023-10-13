import React from 'react'
import {useSelector} from 'react-redux';

const CourseValue = () => {

  const totalCost = useSelector(({form, courses:{data,searchTerm}}) => {
    const filteredCourses = data.filter((course) =>{
        return    course.name.toLowerCase().includes(searchTerm.toLowerCase())
    }).reduce((acc,course) => acc+course.cost,0)
    return filteredCourses
})

  return (
    <>
      <div className='coursePrice'>Toplam Tutar: {totalCost} TL</div>
    </>
  )
}

export default CourseValue