function Message({ user, message }) {
  return (
    <div className="text-black bg-red-500 text-lg">{message?.message}</div>
  );
}

export default Message;
