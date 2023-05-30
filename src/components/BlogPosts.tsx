import NextLink from 'next/link';
import { Stack, Heading, Text } from '@chakra-ui/react';

import { FormattedPost } from '@/modules/posts/types';
interface IBlogPosts {
  posts: FormattedPost[];
}

export default function BlogPosts({ posts }: IBlogPosts) {
  return (
    <section>
      {posts?.map(({ _sys, id, date, title }) => (
        <NextLink
          href={`/blog/${_sys.relativePath.replace('.md', '')}`}
          key={id}
        >
          <Stack as="article" direction="row" spacing={2}>
            <Heading as="h3" fontSize={'xl'} fontWeight={400}>
              {title}
            </Heading>
            {date && (
              <Text as="span" color="blackAlpha.600">
                {new Date(date).toLocaleDateString()}
              </Text>
            )}
          </Stack>
        </NextLink>
      ))}
    </section>
  );
}
