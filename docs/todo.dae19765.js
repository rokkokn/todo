parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SWTz":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function r(e){var t=document.createElement("template");return t.innerHTML=e,t.content.firstElementChild}function n(n){for(var o=arguments.length,c=new Array(o>1?o-1:0),l=1;l<o;l++)c[l-1]=arguments[l];var p=n.reduce(function(n,o,l){var p=c[l-1];return"string"==typeof p?n+t(p)+o:"object"===e(p)?n+r(p)+o:n+String(p)+o});return r(p)}function o(e,t){t.innerHTML="",t.appendChild(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.escapeSpecialChars=t,exports.htmltoElement=r,exports.element=n,exports.render=o;
},{}],"hRBl":[function(require,module,exports) {
"use strict";function e(){var t=o(['<li><input type="checkbox" class="checkbox">',"</input>\n            ",'\n            <button class="delete">✕</button></li>']);return e=function(){return t},t}function t(){var e=o(['<li><input type="checkbox" class="checkbox" checked><s>',"</s></input>\n            ",'\n           <button class="delete">✕</button></li>']);return t=function(){return e},e}function o(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}Object.defineProperty(exports,"__esModule",{value:!0});var c=require("./html-util"),l=function(){function o(){i(this,o)}return r(o,[{key:"createElement",value:function(o,i){var n=i.onUpdateTodo,r=i.onPriorityTodo,l=i.onDeleteTodo,s=0===o.priority?'<select name="priority" class="priority"><option value="1" class="priorityItem" selected>1</option>\n            <option value="2" class="priorityItem" >2</option>\n            <option value="3" class="priorityItem">3</option></select>':1===o.priority?'<select name="priority" class="priority"><option value="1" class="priorityItem" >1</option>\n            <option value="2" class="priorityItem" selected>2</option>\n            <option value="3" class="priorityItem">3</option></select>':'<select name="priority" class="priority"><option value="1" class="priorityItem">1</option>\n              <option value="2" class="priorityItem">2</option>\n              <option value="3" class="priorityItem" selected>3</option></select>';console.log(s);var a=o.completed?c.element(t(),o.title,s):c.element(e(),o.title,s);console.log("todoItemElement",a),a.querySelector(".checkbox").addEventListener("change",function(){n({id:o.id,completed:!o.completed})});var p=a.querySelector(".priority"),u=p.options;return p.addEventListener("change",function(e){var t=p.selectedIndex;r({id:o.id,priority:t}),u[o.priority].selected=!0}),a.querySelector(".delete").addEventListener("click",function(){l({id:o.id})}),a}}]),o}();exports.TodoItemView=l;
},{"./html-util":"SWTz"}],"hXmo":[function(require,module,exports) {
"use strict";function e(){var n=t(["<ul />"]);return e=function(){return n},n}function t(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0});var i=require("./html-util"),u=require("./TodoItemView"),a=function(){function t(){n(this,t)}return r(t,[{key:"createElement",value:function(t,n){var o=n.onUpdateTodo,r=n.onPriorityTodo,a=n.onDeleteTodo,c=i.element(e());return t.forEach(function(e){var t=(new u.TodoItemView).createElement(e,{onDeleteTodo:a,onPriorityTodo:r,onUpdateTodo:o});c.appendChild(t)}),c}}]),t}();exports.TodoListView=a;
},{"./html-util":"SWTz","./TodoItemView":"hRBl"}],"DXAn":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var e=0,i=function i(o){var r=o.title,s=o.completed,n=o.priority;t(this,i),this.id=e++,this.title=r,this.completed=s,this.priority=n};exports.TodoItemModel=i;
},{}],"JaZk":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}Object.defineProperty(exports,"__esModule",{value:!0});var i=function(){function t(){e(this,t),this._listeners=new Map}return n(t,[{key:"addEventListener",value:function(e,t){this._listeners.has(e)||this._listeners.set(e,new Set),this._listeners.get(e).add(t)}},{key:"emit",value:function(e){var t=this,n=this._listeners.get(e);n&&n.forEach(function(e){e.call(t),console.log("listenerSet_this",t)})}},{key:"removeEventListener",value:function(e,t){var n=this._listeners.get(e);n&&n.forEach(function(e){e===t&&n.delete(t)})}}]),t}();exports.EventEmitter=i;
},{}],"BHY6":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?r(e):n}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}Object.defineProperty(exports,"__esModule",{value:!0});var a=require("../EventEmitter"),s=function(t){function n(){var t,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e(this,n),(t=i(this,u(n).call(this))).items=o,t}return c(n,a.EventEmitter),o(n,[{key:"getTotalCount",value:function(){return this.items.length}},{key:"getTodoItems",value:function(){return this.items}},{key:"onChange",value:function(t){this.addEventListener("change",t)}},{key:"emitChange",value:function(){this.emit("change")}},{key:"addTodo",value:function(t){""!==t.title&&(this.items.push(t),this.emitChange())}},{key:"updateTodo",value:function(t){var e=t.id,n=t.completed,o=this.items.find(function(t){return t.id===e});o&&(o.completed=n,this.emitChange())}},{key:"priorityTodo",value:function(t){var e=t.id,n=t.priority,o=this.items.find(function(t){return t.id===e});o&&(o.priority=n,this.emitChange())}},{key:"deleteTodo",value:function(t){var e=t.id;this.items=this.items.filter(function(t){return t.id!==e}),this.emitChange()}}]),n}();exports.TodoListModel=s;
},{"../EventEmitter":"JaZk"}],"AoZl":[function(require,module,exports) {
"use strict";function e(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function o(e,o){for(var t=0;t<o.length;t++){var i=o[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,t,i){return t&&o(e.prototype,t),i&&o(e,i),e}Object.defineProperty(exports,"__esModule",{value:!0});var i=require("./view/html-util"),d=require("./view/TodoListView"),n=require("./model/TodoItemModel"),r=require("./model/TodoListModel"),l=function(){function o(){e(this,o),this.todoListView=new d.TodoListView,this.todoListModel=new r.TodoListModel([])}return t(o,[{key:"handleAdd",value:function(e){this.todoListModel.addTodo(new n.TodoItemModel({title:e,completed:!1,priority:0}))}},{key:"handleUpdate",value:function(e){var o=e.id,t=e.completed;this.todoListModel.updateTodo({id:o,completed:t})}},{key:"handlePriority",value:function(e){var o=e.id,t=e.priority;this.todoListModel.priorityTodo({id:o,priority:t})}},{key:"handleDelete",value:function(e){var o=e.id;this.todoListModel.deleteTodo({id:o})}},{key:"mount",value:function(){var e=this,o=document.querySelector(".js-form"),t=document.querySelector(".js-form-input"),d=document.querySelector(".js-todo-list"),n=document.querySelector(".js-todo-count");this.todoListModel.onChange(function(){var o=e.todoListModel.getTodoItems(),t=e.todoListView.createElement(o,{onUpdateTodo:function(o){var t=o.id,i=o.completed;e.handleUpdate({id:t,completed:i})},onPriorityTodo:function(o){var t=o.id,i=o.priority;e.handlePriority({id:t,priority:i})},onDeleteTodo:function(o){var t=o.id;e.handleDelete({id:t})}});i.render(t,d),n.textContent="Todoアイテム数：".concat(e.todoListModel.getTotalCount())}),o.addEventListener("submit",function(o){o.preventDefault(),e.handleAdd(t.value),t.value=""})}}]),o}();exports.App=l;
},{"./view/html-util":"SWTz","./view/TodoListView":"hXmo","./model/TodoItemModel":"DXAn","./model/TodoListModel":"BHY6"}],"QCba":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./src/App"),r=new e.App;r.mount();
},{"./src/App":"AoZl"}]},{},["QCba"], null)
//# sourceMappingURL=/todo.dae19765.js.map