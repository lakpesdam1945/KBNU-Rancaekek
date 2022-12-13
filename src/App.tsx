import Container from "./Layouts/Container";
import Layouts from "./Layouts/Layouts";
import { Routes, Route } from "react-router-dom";
import BottomNavigation from "./Layouts/Footer/BottomNavigation";
import Home from "./pages/Home";
import { AppContextProvider } from "./context/AppContext";
import Search from "./pages/Search";
import Books from "./pages/books/Books";
function App() {
  return (
    <>
      <AppContextProvider>
        <Layouts>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<div>Profile</div>}></Route>
            <Route path="/warta" element={<div>Warta</div>}></Route>
            <Route path="/lembaga" element={<div>Lembaga</div>}></Route>
            <Route path="/banom" element={<div>Banom</div>}></Route>
            <Route path="/agenda" element={<div>Agenda</div>}></Route>
            <Route path="*" element={<div>Error Not Found Page</div>}></Route>

            {/* Bottom Navigation */}
            <Route path="/search" element={<Search />}></Route>
            <Route path="/books" element={<Books />}></Route>
          </Routes>

          <Container padding="px-4 py-4" fixed fixedBottom>
            <BottomNavigation />
          </Container>
        </Layouts>
      </AppContextProvider>
    </>
  );
}

export default App;
