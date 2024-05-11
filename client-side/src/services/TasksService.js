const getTasks = async () => {
    const response = await fetch(
        'http://localhost:5001/api/tasks');
  
    if (!response.ok) {
        console.error(response);
    //     console.log(response)
      throw new Error('[EXT_ERR]');
    }
  
    const responseData = await response.json();
    console.log(`responseData %o`,responseData);
    const responsedTasks = responseData;
    const loadedTasks = [];
    for (const key in responsedTasks) {
        const task = {
          id: key,
          name: responsedTasks[key].name,
          completed: responsedTasks[key].completed,
        };
        loadedTasks.push(task);
      }
      console.log(`loadedTasks %o`, loadedTasks);
      return loadedTasks;

};
export default getTasks;