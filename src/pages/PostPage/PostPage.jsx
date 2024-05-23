import React, { useState } from "react";
import Post from "../../components/Post/Post";

const PostPage = () => {
  const [value, setValue] = useState("");
  const [values, setValues] = useState([]);

  const addUser = (event) => {
    event.preventDefault();
    setValues([...values, value]);
    setValue("");
  };

  const changeInput = (event) => {
    setValue(event.target.value);
  };

  const editValue = (id) => {
    const newValue = [...values];
    newValue[id] = value;
    setValues(newValue);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={(e) => addUser(e)}>
        <input type="text" value={value} onChange={(e) => changeInput(e)} />
        <button disabled={!value} onClick={(e) => addUser(e)}>
          Добавить
        </button>
        {values.length > 0 ? (
          <div>
            {values.map((todo, id) => (
              <Post
                key={id}
                value={todo}
                disabled={value}
                editValue={editValue}
                id={id}
              />
            ))}
          </div>
        ) : (
          <p>Список пуст</p>
        )}
      </form>
    </div>
  );
};

export default PostPage;
