function Message(props) {
    return (
        <div className='message'>
            <h1>Привет, это {props.greeting}</h1>
            <h2>{props.andMore} &#128640;</h2>
        </div>
    )
}

export default Message;