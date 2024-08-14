"use client";

import { useAuth } from "@/providers/AuthContext";
import { Link } from "@chakra-ui/next-js";
import { Flex } from "@chakra-ui/react";
import { FC, useEffect } from "react";

const Header: FC = () => {
    const { session } = useAuth();

    useEffect(() => console.log(session), [session]);

    return (
        <Flex justifyContent="space-between">
            <Flex>Coin API</Flex>
            <Flex>
                {session ? (
                    <Flex>{session.user.email}</Flex>
                ) : (
                    <Link href="/sign-in">로그인</Link>
                )}
            </Flex>
        </Flex>
    );
};

export default Header;