/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery, gql } from "@apollo/client";
import { Header, Footer, Container, CardRow } from "./styles/elements";
import Wilder, { WilderTypes } from "./components/Wilder";
import AddWilder from "./components/AddWilder";

const ALL_WILDERS = gql`
  query GetAllWilders {
    allWilders {
      id
      name
      city
      skills {
        id
        title
        votes
      }
    }
  }
`;

function App(): JSX.Element {
  // const [wilderList, setWilderList] = useState<WilderTypes[]>([]);

  // const fetchData = async () => {
  //   try {
  //     const result = await axios("http://localhost:5000/api/wilder/read");
  //     setWilderList(result.data.result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { loading, error, data } = useQuery(ALL_WILDERS);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Header>
        <Container>
          <h1>Wilders Book</h1>
        </Container>
      </Header>
      <Container>
        <h2>Wilders</h2>
        <AddWilder />
        <CardRow>
          {data.allWilders &&
            data.allWilders.map((wilder: WilderTypes) => (
              <Wilder
                key={wilder.id}
                name={wilder.name}
                city={wilder.city}
                skills={wilder.skills}
              />
            ))}
        </CardRow>
      </Container>
      <Footer>
        <Container>
          <p>&copy; 2020 Wild Code School</p>
        </Container>
      </Footer>
    </div>
  );
}

export default App;
