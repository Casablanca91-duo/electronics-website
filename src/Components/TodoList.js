'use strict'

// Простой список задач (Todo List)
import { useState } from "react"



function TodoList() {
    const [tasks, setTasks] = useState([]) // состояние для хранения спаска задач
    const [inputValue, setInputValue] = useState("") // Состояние для хранения ввода

    // Функция для добавления новой задачи
    
    const addTask = () => {
        if (inputValue.trim === "") 
            return; // Проверка на пустую строку
        const newTask = {
            id: Date.now(),
            text: inputValue,
        };

        setTasks([...tasks, newTask]); // Обновление списка задач
        setInputValue(""); // Очистка поля ввода
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id)); // Удаляем задачу по id
    }

    return (
        <div>
            <h1>Планируемые задачи</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // Обработчик ввода
                placeholder="Введите задачу"
            />
            <button onClick={addTask}>Добавить задачу</button>
            <ul style={{listStyle: "none"}}>
                {tasks.map((task) => (
                <li key={task.id}>{task.text}
                <button onClick={() => deleteTask(task.id)}>Удалить задачу</button> </li>
                ))}
                 
            </ul> 
        </div>
    );
}


export default TodoList