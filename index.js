const { inquirerMenu, inquirerInput } = require("./helpers/inquirer");
const TaskRepository = require("./repositories/TaskRepository");

const main = async () => {
  const taskRepository = new TaskRepository();
  let option = ''

  do {
     option = await inquirerMenu();

    switch (option) {
      case 1:
        //hacer que el usuario pueda ingresar el titulo de la tarea
        console.log("El usuario selecciono la opcion crear tarea");
        const title = await inquirerInput("Task Title");
        taskRepository.createTask(title);

        break;
      case 2:
        const allTasks = taskRepository.getAllTask();
        console.log(allTasks);
        //mostrar la lista de tareas de la base de datos
        break;

     
      }
    } while (option !== 0);
};
main();
