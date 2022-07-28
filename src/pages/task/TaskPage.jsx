import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import { Task } from '../../components/task/Task';
import style from './TaskPage.module.css';

export function TaskPage() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([
        {
            id: 1,
            checked: true,
            content:'Refazer o front'
        },
        {
            id: 2,
            checked: false,
            content: 'Fazer as novas tarefas'
        }
    ]);

    const tasksDone = tasks.filter((t) => t.checked).length;
    
    function handleNewTaskInput(event) {
        setNewTask(event.target.value);
    }

    function handleCreateNewTask(event) {
        event.preventDefault();

        const lastId = tasks.slice(-1)[0].id;

        setTasks([...tasks, {
            id: lastId + 1,
            checked: false,
            content: newTask
        }]);

        setNewTask('');
    }

    function deleteTask(id) {
        const newTaskList = tasks.filter((task) => task.id !== id);
        setTasks(newTaskList);
    }

    function updateStatus(id, checked) {
        const newTaskList = tasks.map((task) => {
            if (task.id === id) {
                task.checked = checked;
            }
            return task;
        });

        setTasks(newTaskList);
    }

    return (
        <div className={style.container}>
            <form className={style.form} action="">
                <input
                    onChange={handleNewTaskInput}
                    value={newTask} 
                    placeholder='Adicione uma nova tarefa'
                />
                <button type='submit' onClick={handleCreateNewTask}>
                    Criar
                    <PlusCircle size={24} />
                </button>
            </form>

            <div className={style.listHeaders}>
                <p className={style.createdTasks}>
                    Tarefas criadas 
                    <span>{tasks.length}</span>
                </p>
                <p className={style.doneTasks}>
                    Concluídas
                    <span>{tasksDone} de {tasks.length}</span>
                </p>
            </div>

            {tasks.map((task) => {
                return (
                    <Task key={task.id} {...task} deleteTask={deleteTask} updateStatus={updateStatus}/>
                )
            })}

        </div>
    );
}