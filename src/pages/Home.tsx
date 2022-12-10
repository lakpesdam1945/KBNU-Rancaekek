import { useContext } from "react";
import { AppContext } from "../context/AppContext";

// type Props = {};

function Home() {
  const appContext = useContext(AppContext);
  console.log(appContext?.userdata);

  return (
    <>
      <div className="flex w-full  flex-col items-start justify-between gap-4">
        {appContext?.userdata?.map((index, a) => index.author)}
        {/* {appContext?.loading ? (
          <span>Loading</span>
        ) : (
          appContext?.userdata?.map((item, index) => (
            <span
              className="p-4 bg-light-accent dark:bg-dark-secondary rounded-md w-full text-sm lowercase"
              key={index}
            >
              {item.name}
            </span>
          ))
        )} */}
      </div>
    </>
  );
}

export default Home;
