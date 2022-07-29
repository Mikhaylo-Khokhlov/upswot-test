<template>
  <div class="todo">
    <div class="todo-hero">
      <img class="todo-hero-logo" src="~assets/img/logo.svg" alt="logo" />
    </div>
    <div class="todo-container">
      <h1 class="todo-title">{{ 'Thank you ' + userName }}</h1>
      <div class="todo-enter">
        <input
          v-model="newTodo"
          type="text"
          placeholder="new task"
          class="todo-enter-search"
          @keyup.enter="addTodo(newTodo)"
        /><svg
          xmlns="http://www.w3.org/2000/svg"
          class="addTask"
          viewBox="0 0 22 22"
          width="22px"
          stroke="currentColor"
          stroke-width="2"
          @click="addTodo(newTodo)"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div class="todoList">
        <table>
          <tr>
            <th>Task</th>
            <th>Remove</th>
            <th>Edit</th>
          </tr>
          <tr v-for="todo in todos" :key="todo.id">
            <td v-if="!todo.editTodo">
              {{ todo.text }}
            </td>
            <td v-else>
              <input
                v-model="editedTodo"
                class="confirmEdit"
                type="text"
                placeholder="Edit task"
                @keyup.enter="confirmEditedTodo(todo.id)"
              />
            </td>
            <td class="icon">
              <svg
                id="IconChangeColor"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                class="removeTask"
                @click="removeTodo(todo.id)"
              >
                <path
                  id="mainIconPathAttribute"
                  d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zM288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512z"
                  stroke-width="1"
                  stroke="#ff0000"
                ></path>
              </svg>
            </td>
            <td>
              <svg
                id="IconChangeColor"
                xmlns="http://www.w3.org/2000/svg"
                class="editTask"
                viewBox="0 0 16 16"
                @click="editTodo(todo)"
              >
                <path
                  id="mainIconPathAttribute"
                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                ></path>
              </svg>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodosPage',
  components: {},
  data() {
    return {
      todos: [],
      newTodo: '',
      editedTodo: '',
    }
  },

  computed: {
    userName() {
      const storageUser = localStorage.getItem('user')
      const currentUser = JSON.parse(storageUser)

      return currentUser.name
    },
  },

  created() {
    const userIsLogin = localStorage.getItem('user')
    if (!userIsLogin) {
      this.$router.push('/login')
    }
  },

  mounted() {
    const userTodos = localStorage.getItem('todos')
    if (userTodos) {
      this.todos = JSON.parse(userTodos)
    }
  },

  methods: {
    removeTodo(id) {
      const elIndex = this.todos.findIndex((item) => item.id === id)
      this.todos.splice(elIndex, 1)
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    addTodo(text) {
      if (this.newTodo !== '') {
        this.todos.push({
          id: Math.random(),
          text,
          editTodo: false,
        })
        localStorage.setItem('todos', JSON.stringify(this.todos))
        this.newTodo = ''
      } else {
        alert("Don't add empty task")
      }
    },
    editTodo(todo) {
      todo.editTodo = true
    },
    confirmEditedTodo(id) {
      this.todos.forEach((item) => {
        if (item.id === id) {
          item.text = this.editedTodo
          item.editTodo = false
        }
      })
      this.editedTodo = ''
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
  },
}
</script>

<style lang="scss" scoped>
.todo {
  min-height: 1080px;
  &-hero {
    height: 797px;
    padding-top: 65px;
    display: flex;
    justify-content: center;
    background: linear-gradient(180deg, #00a9e7 0%, #005b9f 100%);

    &-logo {
      width: 186px;
      height: 119px;

      @media screen and (max-width: 1024px) {
        width: 130px;
        height: 80px;
      }
    }
  }

  &-title {
    margin-bottom: 40px;
    font-size: 60px;
    line-height: 1.6;
    text-align: center;

    @media screen and (max-width: 1024px) {
      font-size: 50px;
    }
  }

  &-container {
    width: 100%;
    max-width: 1191px;
    height: 660px;
    background-color: var(--primary-white);
    padding: 32px;
    position: absolute;
    left: 50%;
    top: 303px;
    transform: translateX(-50%);
    box-sizing: border-box;
  }

  &-enter {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    &-search {
      padding: 16px 15px;
      box-sizing: border-box;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.16;
      cursor: pointer;
      background-color: var(--primary-white);
      width: 421px;
      height: 53px;
      border: 1px solid #9a9a9a;

      @media screen and (max-width: 1024px) {
        width: 210px;
      }

      &:hover {
        outline: none;
        border: 1px solid #101010;
      }
      &:focus {
        outline: none;
        border: 1px solid #101010;
      }
    }

    .addTask {
      width: 40px;
      height: 40px;
      fill: rgb(1, 78, 150);
      color: white;

      &:hover,
      &:focus {
        fill: tomato;
      }
    }
  }

  .todoList {
    display: flex;
    justify-content: center;
    align-items: center;

    .confirmEdit {
      @media screen and (max-width: 1024px) {
        max-width: 100px;
      }
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .removeTask {
    height: 30px;
    width: 30px;
    fill: var(--primary-color);
    color: white;

    &:hover,
    &:focus {
      fill: red;
    }
  }
  .editTask {
    height: 30px;
    width: 30px;
    fill: var(--primary-color);
    color: white;

    &:hover,
    &:focus {
      fill: green;
    }
  }
  table {
    background-color: #d1bc8a;
    color: var(--primary-white);
  }

  th {
    border-bottom: 2px solid white;
    padding: 20px 20px;
  }

  tr {
    border-bottom: 2px solid white;
    margin: 50px 50px;
  }

  td {
    padding: 10px 10px;
    margin: 10px 10px;
  }
}
</style>
