import "./MessageField.css";

export function MessageField({ messageList }) {
  return (
    <div className="message-field">
      {messageList.map((message) => (
        <div key={message.id} className="message">
          <div className="messageTime">
            <span>{message.author}</span>
            <span>{message.date}</span>
          </div>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
}
