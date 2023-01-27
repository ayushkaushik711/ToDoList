import React from 'react';

import './CourseGoalList.css';
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';


const CourseGoalList=(props)=>{
    const deleteHandler=(id)=>{
        props.onDelete(id);
    }
    return <ul className='goal-list'>
        {
            props.goalList.map((goalItem)=>{
                return <CourseGoalItem onDelete={deleteHandler} key={goalItem.id} id={goalItem.id}>{goalItem.text}</CourseGoalItem>;
            })
        }
    </ul>
};

export default CourseGoalList;