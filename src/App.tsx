import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactSection from "./components/ContactSection";
import GraphSection from "./components/GraphSection";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { getInitialContactScreen } from "./store/ContactSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialContactScreen());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="h-[91vh]">
        <Header />
        <div className="grid grid-flow-row sm:grid-cols-[1fr_4fr] h-[100%]">
          <Sidebar />
          <Routes>
            <Route path="/contacts" element={<ContactSection />} />
            <Route path="/graphs" element={<GraphSection />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
