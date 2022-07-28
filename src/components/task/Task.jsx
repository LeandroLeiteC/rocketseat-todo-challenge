import { Circle, Trash, CheckCircle } from 'phosphor-react';
import style from './Task.module.css';

export function Task({id, checked, content, deleteTask, updateStatus}) {

    function handleDeleteTask() {
        deleteTask(id);
    }

    function handleUpdateStatus() {
        updateStatus(id, !checked);
    }


    return (
        <div className={checked ? style.taskDone : style.task}>

        { checked ?
            <button onClick={handleUpdateStatus} className={style.checkedCircle}>
                <CheckCircle size={24} />
            </button>
        :
            <button onClick={handleUpdateStatus} className={style.circle}>
                <Circle size={24} />
            </button>  
        }
          
            <p className={style.content}>
                {content}
            </p>
            
            <button onClick={handleDeleteTask} className={style.trash}>
                <Trash size={20} />
            </button>
        </div>
    );
}