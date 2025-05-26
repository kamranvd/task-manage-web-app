import React from 'react';
import { useParams } from 'react-router-dom';

export default function ToDoList(props) {
    console.log(useParams());

    const { postid } = useParams();

    const listId = postid ?? 'All';
  return (
    <div>
        <h2>Task Management App</h2>
            <ul>
                ToDoList ({ listId })
                <li>
                    <form  className="form-search" id="searchForm" >
                            <label>
                                Search:
                                <input type="text" name="search" id="searchInput" required />
                            </label>
                            <button className="btn-search" type="submit">Search</button>
                        </form>
                </li>
            </ul>
    </div>
  )
}
