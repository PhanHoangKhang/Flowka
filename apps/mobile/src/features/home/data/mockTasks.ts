export type Task = {
  id: string;
  title: string;
  category: string;
  duration: number;
  completed: boolean;
  startTime?: string;
  endTime?: string;
};

export type UpcomingItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  daysLeft: number;
};

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Finish sprint planning",
    category: "University",
    duration: 30,
    completed: false,
    startTime: "11:00",
    endTime: "11:30",
  },
  {
    id: "2",
    title: "Review AWS notes",
    category: "University",
    duration: 45,
    completed: false,
    startTime: "14:00",
    endTime: "14:45",
  },
  {
    id: "3",
    title: "Read 20 pages",
    category: "Personal",
    duration: 20,
    completed: true,
    startTime: "09:00",
    endTime: "09:20",
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
    title: "Workout",
    category: "Personal",
    duration: 45,
    completed: true,
    startTime: "07:00",
    endTime: "07:45",
  },
  {
    id: "6",
    title: "Review Networking",
    category: "University",
    duration: 30,
    completed: true,
  },
];

export const upcomingTasks: UpcomingItem[] = [
  {
    id: "1",
    title: "Java Midterm",
    date: "Sat, Nov 29",
    time: "9:00 AM",
    daysLeft: 7,
  },
  {
    id: "2",
    title: "Dentist appointment",
    date: "Wed, Nov 25",
    time: "3:00 PM",
    daysLeft: 3,
  },
];