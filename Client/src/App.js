import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TeacherAuth from './pages/TeacherAuth';
import StudentAuth from './pages/StudentAuth';
import ClassList from './pages/ClassList';
import AddClass from './pages/AddClass';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/teacher-auth' element={<TeacherAuth />} />
          <Route path='/student-auth' element={<StudentAuth />} />
          <Route path='/teacher-classes' element={<ClassList />} />
          <Route path='/teacher-add-class' element={<AddClass />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
