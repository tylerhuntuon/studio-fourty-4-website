import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRouter from "./router";

function App(){
  return(
    <BrowserRouter>
      <div className = "min-h-screen flex flex-col">
        <Navbar />
        <main className = "flex-1">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;