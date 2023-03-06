import React from "react";
import ReactLoading from "react-loading";

function Loading() {
  return (
    <div className="w-[20%] m-auto h-[50px] relative top-[250px] md:top-[250px] items-center">
      <ReactLoading type="cylon" color="#424242" height={100} width={100} />
    </div>
  );
}

export default Loading;
