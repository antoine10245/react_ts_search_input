import * as React from "react";

const Result = ({ props }: any) => {
  console.log(props);

  return <p>{props.result}</p>;
};

export default Result;
