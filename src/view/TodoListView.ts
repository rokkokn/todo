import { element } from "./html-util";
import { TodoItemView } from "./TodoItemView";
import { TodoItemModel } from "../model/TodoItemModel";

export class TodoListView {
  /**
   * `todoItems`に対応するTodoリストのHTML要素を作成して返す
   * @param {TodoItemModel[]} todoItems TodoItemModelの配列
   * @param {function({id:number, completed: boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
   * @param {function({id:number, priority: number})} onPriorityTodo 優先順位の更新イベントリスナー
   * @param {function({id:number})} onDeleteTodo 削除ボタンのクリックイベントリスナー
   * @returns {Element} TodoItemModelの配列に対応したリストのHTML要素
   */

  createElement(
    todoItems: TodoItemModel[],
    {
      onUpdateTodo,
      onPriorityTodo,
      onDeleteTodo,
    }: {
      onUpdateTodo: ({
        id,
        completed,
      }: {
        id: number;
        completed: boolean;
      }) => void;

      onPriorityTodo: ({
        id,
        priority,
      }: {
        id: number;
        priority: number;
      }) => void;

      onDeleteTodo: ({ id }: { id: number }) => void;
    }
  ): Element {
    const todoListElement = element`<ul />`;
    // 各TodoItemモデルに対応したHTML要素を作成し、リスト要素へ追加す
    todoItems.forEach((todoItem) => {
      const todoItemView = new TodoItemView();
      const todoItemElement = todoItemView.createElement(todoItem, {
        onDeleteTodo,
        onPriorityTodo,
        onUpdateTodo,
      });
      todoListElement.appendChild(todoItemElement);
    });
    return todoListElement;
  }
}
