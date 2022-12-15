import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '@/utils/posts';
import { IPost } from '@/types/blog';
import { Box, Container, Heading } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

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
      <Head>
        <title>{post.title} | Ariel Gerstein blog</title>
      </Head>
      <Box mb={10}>
        <Heading as="h1" fontWeight={500} mb={4}>
          {post.title}
        </Heading>
        <span>{post.date}</span>
      </Box>
      <ReactMarkdown
        components={{
          ...ChakraUIRenderer(),
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                // eslint-disable-next-line react/no-children-prop
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
        skipHtml
      >
        {post.markdown}
      </ReactMarkdown>
    </Container>
  );
}
