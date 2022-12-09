import Container from "./Layouts/Container";
import Layouts from "./Layouts/Layouts";
import Navbar from "./Layouts/Navbar/Navbar";

function App() {
  return (
    <>
      <Layouts>
        <Container padding="px-4 py-4" fixed fixedTop>
          <Navbar />
        </Container>
        <Container padding="px-4 py-20 min-h-screen">
          <p className="text-7xl font-light overflow-hidden leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            commodi quidem suscipit repellendus numquam ab. Sint, nesciunt
            expedita nobis delectus maxime nihil saepe, incidunt dolorum quo aut
            consequatur nulla? Maiores!
          </p>
        </Container>
        <Container padding="px-4 py-4" fixed fixedBottom>
          Footer
        </Container>
      </Layouts>
    </>
  );
}

export default App;
