import "./Form.css";

export function Form({ addMessage, createMessage, message }) {
  return (
    <form id="submit-message" action="#" onSubmit={addMessage}>
      <textarea
        className="textarea-chat"
        type="text"
        placeholder="Введите сообщение..."
        onChange={createMessage}
        value={message.text}
      />
      <button className="button-chat" type="submit" form="submit-message">
        Отправить! &#128640; &#128640; &#128640;
      </button>
    </form>
  );
}
