import ListLayout from "../layout/ListLayout";
import getTasks from '../services/TasksService';
import { useEffect, useState } from "react";
const TasksPage = (props) => {
    const [tasks, setTasks] = useState([])
    const [httpError, setHttpError] = useState('')

    useEffect(() => {
        getTasks()
      .then(loadedTasks => setTasks(loadedTasks))
      .catch(error => {
        setHttpError(error.message);
      });
    }, []);
    // const tasks = [
    //     {
    //         id: 1,
    //         name: 'task 1'
    //     },
    //     {
    //         id: 2,
    //         name: 'task 2'
    //     }
    // ];
    const tasksList = tasks.map((item, idx) => (
        <li
            key={item.id}
        >{item.name}</li>
    )
    );
    return (
        <section>
            <h1>Task page</h1>
            <ListLayout listContent={tasksList}></ListLayout>
        </section>
    );
}

export default TasksPage;