import { Outlet, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Meals } from "./components/Meals";
import { Drinks } from "./components/Drinks";
import { Meal } from "./components/Meal";
import { Drink } from "./components/Drink";

function App() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <Header />
      <div className="w-full h-full flex-1 border-2 border-cyan-600">
        <h1 className="font-bold text-4xl text-center text-red-600">Home</h1>
      </div>
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/search-meal" element={<Meals />} />
        <Route path="/search-meal/:meal" element={<Meal />} />

        <Route path="/search-drink" element={<Drinks />} />
        <Route path="/search-drink/:drink" element={<Drink />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
