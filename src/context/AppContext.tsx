import { createContext, useEffect, useState } from "react";
import axios from "axios";
type Person = {
  id: number;
  title: string;
  slug: string;
  body: string;
  image: string;
  author: string;
  data: string;
};

type Person2<Person> = {
  name: string;
  author: string;
};

type PersonContextType = {
  userdata: Person[] | Person2<Person>[] | null;
  loading: boolean | null;
};

type PersonContextProviderProps = {
  children: React.ReactNode;
};

export const AppContext = createContext<PersonContextType | null>(null);

export const AppContextProvider = ({
  children,
}: PersonContextProviderProps) => {
  const [userdata, setUser] = useState<Person[] | Person2<Person>[] | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userData = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://mwcjson.vercel.app/warta");
        const data = res.data;
        setUser(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    userData();
  }, []);
  return (
    <AppContext.Provider value={{ userdata, loading }}>
      {children}
    </AppContext.Provider>
  );
};
