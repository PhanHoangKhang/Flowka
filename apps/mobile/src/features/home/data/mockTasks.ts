export type Task = {
  id: string;
  title: string;
  category: string;
  duration: number;
  completed: boolean;
};

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Finish sprint planning",
    category: "University",
    duration: 30,
    completed: false,
  },
  {
    id: "2",
    title: "Review AWS notes",
    category: "University",
    duration: 45,
    completed: false,
  },
  {
    id: "3",
    title: "Read 20 pages",
    category: "Personal",
    duration: 20,
    completed: true,
  },
  {
    id: "4",
    title: "Buy groceries",
    category: "Personal",
    duration: 15,
    completed: true,
  },
  {
    id: "5",
    title: "Prepare presentation",
    category: "University",
    duration: 60,
    completed: true,
  },
];