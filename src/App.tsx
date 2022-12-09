import Container from "./Layouts/Container";
import Layouts from "./Layouts/Layouts";
import Navbar from "./Layouts/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import BottomNavigation from "./Layouts/Footer/BottomNavigation";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Layouts>
        <Container padding="px-4 py-4" fixed fixedTop>
          <Navbar />
        </Container>
        <Container padding="px-4 py-20 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<div>Profile</div>}></Route>
            <Route path="/warta" element={<div>Warta</div>}></Route>
            <Route path="/lembaga" element={<div>Lembaga</div>}></Route>
            <Route path="/banom" element={<div>Banom</div>}></Route>
            <Route path="/agenda" element={<div>Agenda</div>}></Route>
            <Route path="*" element={<div>Error Not Found Page</div>}></Route>
          </Routes>
        </Container>
        <Container padding="px-4 py-4" fixed fixedBottom>
          <BottomNavigation />
        </Container>
      </Layouts>
    </>
  );
}

export default App;
