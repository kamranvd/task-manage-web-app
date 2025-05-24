import React from 'react';
import { useParams } from 'react-router-dom';

export default function ToDoList(props) {
    console.log(useParams());

    const { postid } = useParams();

    const listId = postid ?? 'All';
  return (
    <div>
        ToDoList ({ listId })
    </div>
  )
}
