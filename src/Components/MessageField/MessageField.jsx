import "./MessageField.css";

export function MessageField({ messageList }) {
  return (
    <div className="message-field">
      {messageList.map((message) => (
        <div key={message.id} className="message">
          <span>{message.author}</span>
          <span>{message.date}</span>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
}
