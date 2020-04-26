// ユニークなIDを管理する変数
let todoIdx = 0;
export class TodoItemModel {
  /**
   * TodoアイテムのID
   */
  id: number;
  /**
   * Todoアイテムのタイトル
   */
  title: string;
  /**
   * Todoアイテムが完了済みならばtrue、そうでない場合はfalse
   */
  completed: boolean;
  /**
   * Todoアイテムの優先度のindexを取得
   */
  priority: number;

  /**
   * 優先度が選択されていたらtrue、そうでない場合はfalse
   */
  // selected: boolean;

  /**
   * @param title Todoアイテムのタイトル
   * @param completed Todoアイテムが完了済みならばtrue、そうでない場合はfalse
   */
  constructor({
    title,
    completed,
    priority,
  }: {
    title: string;
    completed: boolean;
    priority: number;
  }) {
    // idは自動的に連番となりそれぞれのインスタンスごとに異なるものとする
    this.id = todoIdx++;
    this.title = title;
    this.completed = completed;
    this.priority = priority;
  }
}
