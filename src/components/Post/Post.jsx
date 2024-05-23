import React from "react";

const Post = ({ value, disabled, editValue, id }) => {
  return (
    <div>
      {value}
      <button disabled={!disabled} onClick={() => editValue(id)}>
        Поменять
      </button>
    </div>
  );
};

export default Post;
