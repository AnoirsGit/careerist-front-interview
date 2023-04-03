import { useState } from "react";
import axios from "axios";

const ChatForm = ({addMewMessage}) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const [textValid, setTextValid] = useState(true);
  const nameErrMsg = "Name must only contain letters, numbers, _, or -";
  const textErrMsg = "Text field cannot be empty";

  const validate = (str) => {
    if (str && str.trim().length !== 0) return true;
    return false;
  };

  const validateName = (str) => {
    const pattern = /^[a-zA-Z0-9_-]+$/;
    return pattern.test(str);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidName = validate(name) && validateName(name);
    const isValidText = validate(text);
    setNameValid(isValidName);
    setTextValid(isValidText);

    if (isValidName && isValidText) {
      axios
        .post(`${process.env.REACT_APP_API_URI}/api/message`, {
          name,
          text,
          date: new Date().toString(),
        })
        .catch((err) => {
          console.error(err);
        }).then(res => {
          addMewMessage(res.data);
          setText('');
      });
    } else {
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.ctrlKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <div
      className=" relative w-full xl:w-320 mx-auto flex flex-col xl:flex-row gap-2 xl:gap-6 JS
     items-center"
    >
      <div className="relative">
        <input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            setNameValid(true);
          }}
          className={`custom-input w-72 mb-3 ${
            nameValid ? "" : "border-2 border-red-400"
          } h-max`}
          placeholder="name"
        />
        <div className="absolute bottom-[-0.3rem] text-red-500 text-xs mt-2">
          {!nameValid ? nameErrMsg : ""}
        </div>
      </div>
      <div className="relative">
        <textarea
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            setTextValid(true);
          }}
          onKeyDown={handleKeyDown}
          className={`custom-input ${
            textValid ? "" : "border-2 border-red-400"
          } grow mb-3`}
          rows={2}
        />
        <div className="absolute bottom-[-0.3rem] text-red-500 text-xs mt-2">
          {!textValid ? textErrMsg : ""}
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="w-max px-6 py-2 text-lg border border-purple-400 font-bold rounded bg-white text-purple-400 hover:bg-purple-50"
      >
        Submit
      </button>
    </div>
  );
};
export default ChatForm;
