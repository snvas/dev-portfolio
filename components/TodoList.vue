<script setup>
import { ref, onMounted, watch } from "vue";

const newTask = ref("");
const tasks = ref([]);
const isLoading = ref(true);

onMounted(() => {
  loadTasks();
  isLoading.value = false; // Define como false após os dados serem carregados
});

// Load tasks of localStorage
const loadTasks = () => {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks.value = JSON.parse(storedTasks);
  }
};

//Save tasks on localStorage
const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks.value));
};

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
    saveTasks(); // save tasks after add
  }
};

const removeTask = (index) => {
  tasks.value.splice(index, 1);
  saveTasks(); // save tasks after remove
};

//Observe changes on tasks list and save
/**Adds a watcher to observe changes to the task list and
 * automatically save to localStorage whenever there is a change.
 * The { deep: true } parameter ensures that changes
 * within the array are observed. */
watch(
  tasks,
  (newTasks) => {
    saveTasks();
  },
  { deep: true }
);
</script>
<template>
  <div class="todo-app" v-if="!isLoading">
    <h1 class="text-center text-3xl">To-Do List</h1>
    <div class="task-input">
      <input
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="Add new Task"
      />
      <button @click="addTask">Add To Do</button>
    </div>

    <transition-group name="list" tag="ul" class="task-list">
      <li v-for="(task, index) in tasks" :key="index" class="task-item">
        {{ task }}
        <button @click="removeTask(index)" class="remove-button">Remove</button>
      </li>
    </transition-group>
  </div>
  <div v-else class="loading">Loading...</div>
</template>

<style scoped>
.todo-app {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.app-title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.task-input {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 8px;
  font-size: 14px;
}

button {
  padding: 8px 12px;
  font-size: 14px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.task-list {
  list-style: none;
  padding: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.remove-button {
  padding: 6px 10px;
  font-size: 12px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.remove-button:hover {
  background-color: #c0392b;
}

.list-enter-active,
.list-leave-active {
  transition: opacity 0.5s;
}
.list-enter, .list-leave-to /* .list-leave-active in <2.1.8 */ {
  opacity: 0;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 20px;
}
</style>
