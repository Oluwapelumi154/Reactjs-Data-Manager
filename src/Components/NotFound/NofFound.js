import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
function NotFound() {
  return (
    <div className='container'>
      <div>
        <AiOutlineExclamationCircle style={{ fontSize: "5rem" }} />
      </div>
      <div className='mt-4'>Sorry the Page you are looking for Can't be found</div>
    </div>
  );
}

export default NotFound;
