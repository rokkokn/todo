import { element } from "./html-util";
import { TodoItemModel } from "../model/TodoItemModel";

export class TodoItemView {
  /**
   * `todoItem`に対応するTodoアイテムのHTML要素を作成して返す
   * @param {TodoItemModel} todoItem
   * @param {function({id:number, completed: boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
   * @param {function({id:number, priority: number})} onPriorityTodo チェックボックスの更新イベントリスナー
   * @param {function({id:number})} onDeleteTodo 削除ボタンのクリックイベントリスナー
   * @returns {Element}
   */
  createElement(
    todoItem: TodoItemModel,
    {
      onUpdateTodo,
      onPriorityTodo,
      onDeleteTodo,
    }: {
      onUpdateTodo: (arg: { id: number; completed: boolean }) => void;
      onPriorityTodo: (arg: { id: number; priority: number }) => void;
      onDeleteTodo: (arg: { id: number }) => void;
    }
  ) {
    // セレクト周りのhtml
    const todoItemPriorityFunction: () => Element = () => {
      if (todoItem.priority === 0) {
        return element`<select name="priority" class="priority"><option value="1" class="priorityItem" selected>1</option>
            <option value="2" class="priorityItem" >2</option>
            <option value="3" class="priorityItem">3</option></select>`;
      } else if (todoItem.priority === 1) {
        return element`<select name="priority" class="priority"><option value="1" class="priorityItem" >1</option>
            <option value="2" class="priorityItem" selected>2</option>
            <option value="3" class="priorityItem">3</option></select>`;
      } else {
        return element`<select name="priority" class="priority"><option value="1" class="priorityItem">1</option>
              <option value="2" class="priorityItem">2</option>
              <option value="3" class="priorityItem" selected>3</option></select>`;
      }
    };
    const todoItemPriorityElement = todoItemPriorityFunction();
    console.log(todoItemPriorityElement);
    // 完了済みならchecked属性をつけ、未完了ならchecked属性を外す
    // input要素にはcheckboxクラスをつける
    const todoItemElement = todoItem.completed
      ? element`<li><input type="checkbox" class="checkbox" checked><s>${todoItem.title}</s></input>
            ${todoItemPriorityElement}
           <button class="delete">✕</button></li>`
      : element`<li><input type="checkbox" class="checkbox">${todoItem.title}</input>
            ${todoItemPriorityElement}
            <button class="delete">✕</button></li>`;

    // チェックボックスがトグルしたときのイベントにリスナー関数を登録
    const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
    inputCheckboxElement.addEventListener("change", () => {
      // 指定したTodoアイテムの完了状態を反転させる
      onUpdateTodo({
        id: todoItem.id,
        completed: !todoItem.completed,
      });
    });

    // セレクトボックスを変更したときのイベントにリスナー関数を登録
    const inputPriorityElement: HTMLSelectElement = todoItemElement.querySelector(
      ".priority"
    );
    inputPriorityElement.addEventListener("change", (event: any) => {
      // const val = event.target.value;
      const selectedIndex = inputPriorityElement.selectedIndex;
      onPriorityTodo({
        id: todoItem.id,
        priority: selectedIndex,
      });
    });

    // 削除ボタン(x)がクリックされたときにTodoListModelからアイテムを削除する
    const deleteButtonElement = todoItemElement.querySelector(".delete");
    deleteButtonElement.addEventListener("click", () => {
      onDeleteTodo({
        id: todoItem.id,
      });
    });
    // 作成したTodoアイテムのHTML要素を返す
    return todoItemElement;
  }
}
