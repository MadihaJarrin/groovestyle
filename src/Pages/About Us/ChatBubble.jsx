
const ChatBubble = ({ img }) => {
    return (

        <div className="mt-20 p-10 bg-cyan-100 bg-origin-content border-4 border-dashed "
            style={{ backgroundImage: `url("${img}")` }}>
            <p className="underline decoration-wavy text-center text-2xl text-base-400 font-extrabold italic
             uppercase pb-10 mb-5">Conversation with Customer.</p>

            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-accent">What kind of Product do you offering</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-secondary"> I am looking for a pair of leather shoes & I wear size seven of Hush Puppies.</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-warning">I want to confirm my order .</div>
            </div>

            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-info">Yeah, Sure Sir.</div>
            </div>

            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-success">We have some latest designs of shoes. I hope you will like them.</div>
            </div>

            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-warning">Please deposit your money at our cash counter.</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-error">Thank you, sir.</div>
            </div>
        </div>
    );
};

export default ChatBubble;