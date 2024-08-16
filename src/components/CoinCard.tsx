import { Image } from "@chakra-ui/next-js";
import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

interface CoinCardProps {
    coin: Coin;
}

const CoinCard: FC<CoinCardProps> = ({ coin }) => {
    return (
        <Flex>
            <Text>{coin.market_cap_rank}</Text>
            <Image src={coin.image} alt={coin.name} width={8} height={8} />
            <Text>{coin.name}</Text>
        </Flex>
    );
};

export default CoinCard;