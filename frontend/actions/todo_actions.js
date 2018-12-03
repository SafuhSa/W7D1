export const RECEIVE_TODOS = 'RECEIVE_TODOS';


export const receiveToDos = (toDos) => ({
  type: RECEIVE_TODOS,
  toDos: toDos
});
   
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveToDo = (toDo) => ({
  type: RECEIVE_TODO,
  toDo: toDo
});
