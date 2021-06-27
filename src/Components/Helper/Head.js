import React from "react";

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title + " | Dogs 2";
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.description || "");
  }, [props]);

  return <></>;
};

export default Head;
