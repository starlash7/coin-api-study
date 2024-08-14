"use client";

import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log(process.env.COINGECKO_API_KEY);
  }, []);

  return <Flex bgColor="red.100">Hello, React!</Flex>;
};

export default Home;