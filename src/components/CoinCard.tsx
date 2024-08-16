import { Flex } from "@chakra-ui/react";
import { FC } from "react";

interface CoinCardProps {
    coin: Coin;
}

const CoinCard: FC<CoinCardProps> = ({ coin }) => {
    return <Flex>{coin.name}</Flex>;
};

export default CoinCard;