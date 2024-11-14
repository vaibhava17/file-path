import "./App.css";
import FilesNav from "./FilesNav";

let files = {
  type: "folder",
  name: "root",
  data: [
    {
      type: "folder",
      name: "src",
      data: [
        {
          type: "file",
          name: "index.js",
        },
      ],
    },
  ],
};

function App() {
  return (
    <div className="App">
      <FilesNav file={files} />
    </div>
  );
}

export default App;
