import React,{useState} from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App=()=>{
    const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }    
  ]);
  const deleteHandler=(goalId)=>{
    setCourseGoals((prevGoals)=>{
      const updatedGoals=prevGoals.filter((goalItem)=>goalItem.id!==goalId);
      return updatedGoals;  
    })
  }
  let content=<p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>;
  const addExpenseHandler=(data)=>{
    setCourseGoals([...courseGoals,data]);
  }
  return <div>
    <section id="goal-form">
      <CourseInput onAddExpense={addExpenseHandler}/>
    </section>
    <section id="goals">
      {courseGoals.length===0&&content}
      <CourseGoalList goalList={courseGoals} onDelete={deleteHandler}/>
    </section>
  </div>
}
export default App;