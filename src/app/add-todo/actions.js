'use server'
// prevState - State truoc do cua form (truyen boi useActionState)
// formData - Du lieu form tu client - formData Obj
// return {Obj}
export async function addTodo(prevState, formData){
    const todo = formData.get('todo');
    if(!todo||todo.trim()===""){
        return {message: "Name is required", success: false }
    }
    console.log(todo);
    return {message: `Add todo: ${todo} successful.`, success: true};
}