import React,{useState} from 'react';
import './CourseInput.css';
import Button from '../../UI/Button/Button';

const CourseInput=(props)=>{
  const [text,setText]=useState("");
  const [isValid,setIsValid]=useState("") ;

  const submitHandler=(event)=>{
    event.preventDefault();
    if(text.trim()===""){
      setIsValid(false);
      return;
    }    
    props.onAddExpense({text : text, key : Math.random().toString()});
    setText("");
  }
  const textChangeHandler=(event)=>{
    setText(event.target.value);
    if(text.trim().length > 0) {
      setIsValid(true);
    }
  }
  return <form onSubmit={submitHandler}>
    <div className='form-control'>
    <input type="text" onChange={textChangeHandler}></input>
    </div>
    <Button type='submit'>Add Goal</Button>
  </form>
}

export default CourseInput;


























