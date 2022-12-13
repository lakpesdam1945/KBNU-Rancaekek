import React from "react";
import Container from "../Layouts/Container";
import Navbar from "../Layouts/Navbar/Navbar";
import dataapp from "../api/json.json";
type Props = {};

const number = 2;
function Search({}: Props) {
  const cari = dataapp.filter((val) => {
    val.post.filter((data) => {
      return data._id === 2;
    });
  });
  console.log(cari);
  return (
    <>
      <Container padding="px-4 py-5" fixed fixedTop>
        <Navbar />
      </Container>
      <Container padding="px-4 py-20 min-h-screen flex items-center justify-center w-full">
        <span className="mx-auto text-center w-full">
          Sedang dalam pengembangan
        </span>
      </Container>
    </>
  );
}

export default Search;
