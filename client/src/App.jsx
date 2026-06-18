import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";

function Home() {
  return (
    <h1 className="text-4xl font-bold text-blue-500">
      Home Page
    </h1>
  );
}
export const serverUrl="http://localhost:5000"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;