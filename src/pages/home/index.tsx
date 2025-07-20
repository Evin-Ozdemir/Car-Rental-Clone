import { FC } from "react";
import Hero from "../../components/hero";
import List from "../../components/list";
import Filter from "../../components/filter";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <Filter />
      <List />
    </div>
  );
};

export default Home;
