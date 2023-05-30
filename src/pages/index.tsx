import Head from 'next/head';
import { Container, Heading, Box } from '@chakra-ui/react';
import { InferGetStaticPropsType } from 'next';

import { getOrderedPosts } from '@/modules/posts/api';
import BlogPosts from '@/components/BlogPosts';

export const getStaticProps = async () => {
  const posts = await getOrderedPosts();

  return {
    props: {
      posts,
    },
  };
};

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Ariel Gerstein | Javascript developer</title>
        <meta
          name="description"
          content="Front-end engineer specialized in React and Typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="container.lg">
        <Box as="section">
          <Heading
            as="h2"
            fontSize="24px"
            lineHeight={'1.5em'}
            fontWeight={400}
            mb={2}
          >
            Hi 👋 I&apos;m a Javascript developer from Buenos Aires, Argentina
            🇦🇷🧉 <br /> focused on Typescript and React ⚛️.
          </Heading>
          {/* <Link as={NextLink} href="/about">
            More about me {'->'}
          </Link> */}
        </Box>
        <Heading as="h3" fontWeight={500} fontSize="2xl" mt={20} mb={10}>
          Latests articles
        </Heading>
        <BlogPosts posts={posts ?? []} />
      </Container>
    </div>
  );
}
