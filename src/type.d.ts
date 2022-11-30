interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

interface IListItem {
  item: TodoType;
}

type AddFn = (text: string) => void;