import { useState } from "react";

import "./App.css";
import PostList from "./pages/PostsList";

function App() {
  const [count, setCount] = useState(0);

  return <PostList />;
}

export default App;
