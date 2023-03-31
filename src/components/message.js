import { parseDate } from "../helpers/date";

const  Message = (props) => {
  const { name = "anonym", text = "lorem ipsum", date = parseDate(new Date()) } = props;

  return (
    <div className="chat-message-round mx-auto mb-4 min-w-[24rem] max-w-xl relative border flex flex-col border-slate-400 shadow-lg text-slate-700 h-max p-4">
      <p className="text-slate-700 font-semibold">{name}</p>
      <div className="grow mb-3 break-words w-full">{text}</div>
      <small className="absolute bottom-2 right-4 text-sm text-slate-400 float-right">{date}</small>
    </div>
  );
}

export default Message;

// The style code can be placed in a separate CSS file and imported in the component's parent component
