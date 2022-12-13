import { GetStaticProps } from 'next';
import { getAllPostIds, getPostData } from '@/utils/posts';
import { IPost } from '@/types/blog';
import { Box, Container, Heading } from '@chakra-ui/react';

interface StaticProps {
  post: IPost;
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<
  StaticProps,
  { id: string }
> = async ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post = await getPostData(params!.id);

  return {
    props: { post },
  };
};

export default function Post({ post }: StaticProps) {
  return (
    <Container maxW="container.lg" mt={20} mb={10}>
      <Box mb={10}>
        <Heading as="h1" fontWeight={500} mb={4}>
          {post.title}
        </Heading>
        <span>{post.date}</span>
      </Box>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </Container>
  );
}
