'use client'
import styles from './add-todo.module.css'
import { addTodo } from './actions';
import { useActionState, useEffect } from 'react';
export default function AddToDo() {
    const [state,formAction] = useActionState(addTodo,{message: null, success: null})
    console.log(state);
    useEffect(()=>{
        if(state.success){
            alert(state.message);
        } else if (state.success===false && state.message ) {
            alert(state.message);
        }
    }
    ,[state]);
    return (
        <div className={styles.container}>
            <h1>Add Todo</h1>
            <form action={formAction} className={styles.formContainer}>
                <label htmlFor='todo' className={styles.label}>Name: </label>
                <input
                    type='text'
                    id='todo'
                    name='todo'
                    className={styles.inputField}
                    required
                />
                <button type='submit' className={styles.submitbtn}>Add</button>
            </form>
        </div>
    );
}