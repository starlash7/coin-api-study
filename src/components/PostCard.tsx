import { getKoreanCurrency } from "@/lib/koreanCurrencyConverter";
import { supabaseClient } from "@/lib/supabaseClient";
import { Image } from "@chakra-ui/next-js";
import { Flex, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface PostCardProps {
    post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
    const coin: Coin = JSON.parse(post.coin);
    const createdAt = new Date(post.created_at);

    const [nickname, setNickname] = useState<string>("");

    const router = useRouter();

    useEffect(() => {
        const fetchPostOwner = async () => {
            const { data, error } = await supabaseClient
                .from("profiles")
                .select("*")
                .eq("user_id", post.user_id);

            if (error) {
                console.error("Error fetching proifle: ", error);
            } else {
                if (data.length === 0) {
                    setNickname(`#${post.user_id.substring(post.user_id.length - 4)}`);
                } else {
                    setNickname(data[0].nickname);
                }
            }
        };

        fetchPostOwner();
    }, []);

    return (
        <Flex
            flexDir="column"
            bgColor="gray.100"
            p={2}
            w="600px"
            rounded="md"
            gap={2}
            onClick={() => router.push(`/post/${post.id}`)}
        >
            <Flex alignItems="center" gap={2}>
                <Image
                    rounded="full"
                    src={coin.image}
                    alt={coin.name}
                    width={8}
                    height={8}
                />
                <Flex mt={2} gap={1}>
                    <Text>
                        {createdAt.getFullYear() % 100}년 {createdAt.getMonth() + 1}월{" "}
                        {createdAt.getDate()}일 {createdAt.getHours()}시,
                    </Text>
                    <Text>{getKoreanCurrency(coin.current_price)}원</Text>
                    <Text color={coin.price_change_percentage_24h >= 0 ? "red" : "blue"}>
                        {coin.price_change_percentage_24h > 0 ? "+" : ""}
                        {coin.price_change_percentage_24h.toFixed(2)}%
                    </Text>
                </Flex>
            </Flex>
            <Flex>{nickname}</Flex>
            <Flex fontWeight="semibold">➡️ {post.text}</Flex>
        </Flex>
    );
};

export default PostCard;