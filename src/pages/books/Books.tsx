import Container from "../../Layouts/Container";
import Navbar from "../../Layouts/Navbar/Navbar";

type Props = {};

function Books({}: Props) {
  return (
    <>
      <Container padding="px-4 py-5" fixed fixedTop>
        <Navbar />
      </Container>
      <Container padding="px-4 py-20 flex flex-col w-full">
        <div className="w-full flex flex-col bg-emerald-700 h-auto p-4 rounded-md gap-2 drop-shadow-lg">
          <h3 className="text-sm font-light text-light-accent ">
            Jelajahi Khazanah Keiluman
          </h3>
          <h4 className="text-2xl font-semibold text-dark-primary-text">
            Nahdlatul Ulama
          </h4>
        </div>
        <div className="pt-5">
          <div className="grid grid-cols-2 gap-4">
            <CardBooks title="Aswaja" />
            <CardBooks title="Sejarah NU" />
            <CardBooks title="Kebangasaan" />
            <CardBooks title="Keindonesiaan" />
            <CardBooks title="Ulama Nu" />
            <CardBooks title="Madzhab" />
            <CardBooks title="Politik NU" />
            <CardBooks title="Ekonomi" />
            <CardBooks title="Pancasila" />
            <CardBooks title="Hukum" />
          </div>
        </div>
      </Container>
    </>
  );
}

type CardBooksProps = {
  title: string;
};

function CardBooks(propsIn: CardBooksProps) {
  const props = { ...propsIn };
  return (
    <>
      <div className="flex flex-col justify-evenly gap-4 w-full h-auto bg-light-card dark:bg-dark-accent overflow-hidden relative rounded-lg p-4">
        <h3 className="font-semibold text-base">{props.title}</h3>
        <img
          src="https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3MlMjBoaXN0b3J5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="books"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </>
  );
}

export default Books;
