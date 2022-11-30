interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

interface IListItem {
  item: TodoType;
  toggleTodo: ToggleFn;
}

type AddFn = (text: string) => void;

type ToggleFn=(item:TodoType)=>void