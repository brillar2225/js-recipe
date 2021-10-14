/* eslint-disable no-unused-vars */
// 要素を定数に指定する
const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const container = document.getElementById("memo-container")

// まず、add-buttonを押したとき、memo-inputの内容を取得する
addButton.onclick = function() {
  const text = memoInput.value

  // memo-inputの内容を表示させるために、div要素を追加
  const display = document.createElement("div")
  display.className = "display"

  // displayの中にcontentを追加
  const content = document.createElement("div")
  content.className = "content"
  content.textContent = text
  // displayの中にcontentを入れる
  display.append(content)
  // containerの中にdisplayを入れる
  container.append(display)
  // memo-inputを空にする
  memoInput.value = ""

  // 削除ボタンを作る
  const deleteInput = document.createElement("button")
  deleteInput.className = "delete"
  deleteInput.textContent = "削除"
  // 削除ボタンを押すとdisplayの内容が削除される
  deleteInput.onclick = function() {
    display.remove()
  }
  // displayの中にdeleteInputを入れる
  display.append(deleteInput)
  // containerの中にdisplayを入れる
  container.append(display)
}
