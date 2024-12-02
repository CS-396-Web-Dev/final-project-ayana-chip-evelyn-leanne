import {
    createContext,
    ReactNode,
    useContext,
    useState,
    Dispatch,
  } from 'react';
  
  interface StatProviderProps {
    children: ReactNode;
  }
  
  interface Stat {
    name: string;
    setName: Dispatch<any>;
    hunger: number;
    setHunger: Dispatch<any>;
    happiness: number;
    setHappiness: Dispatch<any>;
    cleanliness: number;
    setCleanliness: Dispatch<any>;
    growth: string;
    setGrowth: Dispatch<any>;
    index_x: number;
    setIndexX: Dispatch<any>;
    index_y: number;
    setIndexY: Dispatch<any>;
  }
  
  const defaultStatValues: Stat = {
    name: "Tammy",
    setName: () => {},
    hunger: 80,
    setHunger: () => {},
    happiness: 50,
    setHappiness: () => {},
    cleanliness: 90,
    setCleanliness: () => {},
    growth: "child",
    setGrowth: () => {},
    index_x: 0,
    setIndexX: () => {},
    index_y: 0,
    setIndexY: () => {},
  };
  const StatContext = createContext<Stat>(defaultStatValues);

  export const useStatContext = () => useContext(StatContext);
  
  export default function StatContextProvider({
    children,
  }: StatProviderProps) {
    const [name, setName] = useState(defaultStatValues.name);
    const [hunger, setHunger] = useState(defaultStatValues.hunger);
    const [happiness, setHappiness] = useState(defaultStatValues.happiness);
    const [cleanliness, setCleanliness] = useState(defaultStatValues.cleanliness);
    const [growth, setGrowth] = useState(defaultStatValues.growth);
    const [index_x, setIndexX] = useState(defaultStatValues.index_x);
    const [index_y, setIndexY] = useState(defaultStatValues.index_y);
  
    return (
        <StatContext.Provider
        value={{
          name,
          setName,
          hunger,
          setHunger,
          happiness,
          setHappiness,
          cleanliness,
          setCleanliness,
          growth,
          setGrowth,
          index_x,
          setIndexX,
          index_y,
          setIndexY,
        }}
      >
        {children}
      </StatContext.Provider>
    );
  }
  