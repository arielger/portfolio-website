import { Container, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import { InferGetStaticPropsType } from 'next';

import BlogPosts from '@/components/BlogPosts';
import { getOrderedPosts } from '@/modules/posts/api';

export const getStaticProps = async () => {
  const posts = await getOrderedPosts();

  return {
    props: {
      posts,
    },
  };
};

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container maxW="container.lg" mt={20} mb={10}>
      <Head>
        <title>Ariel Gerstein | Blog</title>
      </Head>
      <Heading fontWeight={500} as="h1" mb={10}>
        Blog
      </Heading>
      <BlogPosts posts={posts ?? []} />
    </Container>
  );
}
