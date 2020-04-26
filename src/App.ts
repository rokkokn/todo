import { render } from "./view/html-util";
import { TodoListView } from "./view/TodoListView";
import { TodoItemModel } from "./model/TodoItemModel";
import { TodoListModel } from "./model/TodoListModel";

export class App {
  todoListView: TodoListView;
  todoListModel: TodoListModel;
  constructor() {
    // 1. TodoListの初期化
    this.todoListView = new TodoListView();
    this.todoListModel = new TodoListModel([]);
  }

  /**
   * Todoを追加するときに呼ばれるリスナー関数
   * @param {string} title
   */

  handleAdd(title: string) {
    this.todoListModel.addTodo(
      new TodoItemModel({ title, completed: false, priority: 0 })
    );
  }

  /**
   * Todoの状態を更新したときに呼ばれるリスナー関数
   * @param {{ id:number, completed: boolean }}
   */

  handleUpdate({ id, completed }: { id: number; completed: boolean }) {
    this.todoListModel.updateTodo({ id, completed });
  }

  /**
   * 優先順位を更新したときに呼ばれるリスナー関数
   * @param {{ id:number, priority:number }}
   */
  handlePriority({ id, priority }: { id: number; priority: number }) {
    this.todoListModel.priorityTodo({ id, priority });
  }

  /**
   * Todoを削除したときに呼ばれるリスナー関数
   * @param {{ id: number }}
   */
  handleDelete({ id }: { id: number }) {
    this.todoListModel.deleteTodo({ id });
  }

  mount() {
    const formElement = document.querySelector(".js-form");
    const inputElement = document.querySelector(
      ".js-form-input"
    ) as HTMLInputElement;
    const containerElement = document.querySelector(".js-todo-list");
    const todoItemCountElement = document.querySelector(".js-todo-count");

    // 2. TodoListModelの状態が更新されたら表示を更新する
    this.todoListModel.onChange(() => {
      // それぞれのTodoItem要素をtodoListElement以下へ追加する
      const todoItems = this.todoListModel.getTodoItems();
      const todoListElement = this.todoListView.createElement(todoItems, {
        onUpdateTodo: ({ id, completed }) => {
          this.handleUpdate({ id, completed });
        },
        onPriorityTodo: ({ id, priority }) => {
          this.handlePriority({ id, priority });
        },
        // Todoアイテムが削除イベントを発生したときに呼ばれるリスナー関数
        onDeleteTodo: ({ id }) => {
          this.handleDelete({ id });
        },
      });

      // containerElementの中身をtodoListElementで上書きする
      render(todoListElement, containerElement);
      // アイテム数の表示を更新
      todoItemCountElement.textContent = `Todoアイテム数：${this.todoListModel.getTotalCount()}`;
    });
    // 3. フォームを送信したら、新しいTodoItemModelを追加する
    formElement.addEventListener("submit", (event) => {
      // submitイベント本来の動きを止める
      event.preventDefault();
      // 新しいTodoItemをTodoListへ追加する
      this.handleAdd(inputElement.value);
      // 入力欄を空文字列にしてリセットする
      inputElement.value = "";
    });
  }
}
