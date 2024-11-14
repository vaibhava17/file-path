import React, { useState } from "react";

const FilesNav = ({ file }) => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  if (!file) return null;
  return (
    <div
      style={{
        marginLeft: 20,
      }}
    >
      <div onClick={handleToggle}>
        {file?.type === "folder" ? "F" : "f"} : {file?.name}
      </div>
      {isOpen && file?.data &&
        file?.data.map((item, i) => <FilesNav file={item} key={i} />)}
    </div>
  );
};

export default FilesNav;
