export type Task = {
  id: string;
  idUser: string;
  title: string;
  summary: string;
  dueDate: string;
}

export type NewTaskData = {
  title: string;
  summary: string;
  date: string
};
