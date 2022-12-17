import Head from 'next/head';
import { Container, Heading, Box } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

import { getSortedPostsData } from '@/utils/posts';
import { IPost } from '@/types/blog';
import BlogPosts from '@/components/BlogPosts';

interface StaticProps {
  posts: IPost[];
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }: StaticProps) {
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
        <BlogPosts posts={posts} />
      </Container>
    </div>
  );
}
