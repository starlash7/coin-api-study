"use client";

import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch("/api/coins");

        if (!res.ok) {
          throw new Error("Failed to fetch coins");
        }

        const data = await res.json();

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoins();
  }, []);

  return <Flex bgColor="red.100">Hello, React!</Flex>;
};

export default Home;