import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCourse } from '../store/slices/courseSlice'

const CourseList = () => {
  const { mainCourses } = useSelector(({ form, courses: { data, searchTerm } }) => {
    const filteredCourses = data.filter((course) => {
      return course.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return { mainCourses: filteredCourses }
  })
  const dispatch = useDispatch()

  const renderAllcourse = mainCourses.map((course) => {
    return (
      <>
        <div key={course.id} className='panel'>
          <h3>{course.name}</h3>
          <h4>{course.desc}</h4>
          <p>{course.cost} TL</p>
          <button onClick={() => { dispatch(deleteCourse(course.id)) }} className='button is-danger'>Delete</button>
        </div>
      </>
    )
  })

  return (
    <div className='courseList'>
      {renderAllcourse}
    </div>
  )
}

export default CourseList