import chalk from 'chalk';

const tareas = [
  { title: 'Tarea 1', completed: true },
  { title: 'Tarea 2', completed: false },
  { title: 'Tarea 3', completed: true },
  { title: 'Tarea 4', completed: false }
];

tareas.forEach(tarea => {
  if (tarea.completed) {
    console.log(chalk.green(tarea.title));
  } else {
    console.log(chalk.red(tarea.title));
  }
});
