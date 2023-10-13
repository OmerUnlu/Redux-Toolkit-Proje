import './App.css';
import CourseForm from './Components/CourseForm'
import CourseList from './Components/CourseList';
import CourseSearch from './Components/CourseSearch';
import CourseValue from './Components/CourseValue';



function App() {
  return (
    <div className="App container is-fluid">
      <CourseForm/>
      <CourseSearch/>
      <CourseList/>
      <CourseValue/> 
    </div>
  );
}

export default App;
