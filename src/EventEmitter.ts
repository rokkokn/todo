export class EventEmitter {
  _listeners: Map<string, Set<() => void>>;
  constructor() {
    // 登録する [イベント名, Set(リスナー関数)] を管理するMap
    this._listeners = new Map();
  }
  /**
   * 指定したイベントが実行されたときに呼び出されるリスナー関数を登録する
   * @param {string} type イベント名
   * @param {Function} listener イベントリスナー
   */
  addEventListener(type: string, listener: () => void) {
    // 指定したイベントに対応するSetを作成しリスナー関数を登録する
    if (!this._listeners.has(type)) {
      this._listeners.set(type, new Set());
    }
    const listenerSet = this._listeners.get(type);
    listenerSet.add(listener);
  }
  /**
   * 指定したイベントをディスパッチする
   * @param {string} type イベント名
   */
  emit(type: string) {
    // 指定したイベントに対応するSetを取り出し、すべてのリスナー関数を呼び出す
    const listenerSet = this._listeners.get(type);
    if (!listenerSet) {
      return;
    }
    listenerSet.forEach(listener => {
      listener.call(this);
      console.log("listenerSet_this", this);
    });
  }
  /**
   * 指定したイベントのイベントリスナーを解除する
   * @param {string} type イベント名
   * @param {Function} listener イベントリスナー
   */
  removeEventListener(type: string, listener: () => void) {
    // 指定したイベントに対応するSetを取り出し、該当するリスナー関数を削除する
    const listenerSet = this._listeners.get(type);
    if (!listenerSet) {
      return;
    }
    listenerSet.forEach(ownListener => {
      if (ownListener === listener) {
        listenerSet.delete(listener);
      }
    });
  }
}
