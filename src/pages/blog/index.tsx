import { GetStaticProps } from 'next';
import { Container, Heading } from '@chakra-ui/react';

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

export default function Blog({ posts }: StaticProps) {
  return (
    <Container maxW="container.lg" mt={20} mb={10}>
      <Heading fontWeight={500} as="h1" mb={10}>
        Blog
      </Heading>
      <BlogPosts posts={posts} />
    </Container>
  );
}
