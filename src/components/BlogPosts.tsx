import NextLink from 'next/link';
import { Stack, Heading, Text } from '@chakra-ui/react';

import { IPost } from '@/types/blog';

interface IBlogPosts {
  posts: IPost[];
}

export default function BlogPosts({ posts }: IBlogPosts) {
  return (
    <section>
      {posts.map(({ id, date, title }) => (
        <NextLink href={`/blog/${id}`} key={id}>
          <Stack as="article" direction="row" spacing={2}>
            <Heading as="h3" fontSize={'xl'} fontWeight={400}>
              {title}
            </Heading>
            <Text as="span" color="blackAlpha.600">
              {date}
            </Text>
          </Stack>
        </NextLink>
      ))}
    </section>
  );
}
