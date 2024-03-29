import React from 'react';
import { TodoContext } from '../TodoContext/index.js';
import {TodoCounter} from '../TodoCounter/index.js'
import {TodoSearch} from '../TodoSearch/index.js'
import {TodoList} from '../TodoList/index.js'
import {TodoItem} from '../TodoItem/index.js'
import {CreateTodoButtom} from '../CreateTodoButton/index.js'
import {TodoTitle} from '../TodoTitle/index.js'
import { Modal } from '../Modal/index.js';
import { TodoForm } from '../TodoForm/index.js';
import { TodosError } from '../TodosError/index.js';
import { TodosLoading } from '../TodosLoading/index.js';
import { EmptyTodos } from '../EmptyTodos/index.js';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
        return (
                <div className= 'main' >
                    
                    <TodoTitle/>
                    <TodoCounter/><TodoSearch/>
                    <TodoList>
                    {error && <TodosError error={error}/>}
                    {loading && <TodosLoading/>}
                    {(!loading && !searchedTodos.length) && <EmptyTodos/>}
    
                    {searchedTodos.map(todo => (
                    <TodoItem 
                    key= { todo.text } 
                    text = { todo.text } 
                    completed = { todo.completed }
                    onComplete = {() => completeTodo(todo.text)}
                    onDelete = {()=> deleteTodo(todo.text)}
                    /> 
                    ))}
                    </TodoList>
                    {!!openModal && (
                        <Modal>
                            <TodoForm></TodoForm>
                        </Modal>
                    )}
                    
                    <CreateTodoButtom
                    setOpenModal={setOpenModal}
                    />
                </div>
        );
}

export { AppUI }