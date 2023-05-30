import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Box, Container, Heading } from '@chakra-ui/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { Prose } from '@nikolovlazar/chakra-ui-prose';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { FormattedPost } from '@/modules/posts/types';

import { getPostByUrl, getPostsUrls } from '@/modules/posts/api';

interface StaticProps {
  post: FormattedPost;
}

export const getStaticPaths = async () => {
  const postsUrls = await getPostsUrls();

  return {
    paths: (postsUrls ?? []).map((url) => ({
      params: { id: url },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  StaticProps,
  { id: string }
> = async ({ params }) => {
  const post = await getPostByUrl(params?.id ?? '');

  return {
    props: {
      post,
    },
  };
};

const Html = (props: { value: any } | undefined) => {
  if (!props?.value) {
    return <></>;
  }
  return <div dangerouslySetInnerHTML={{ __html: props.value }} />;
};

export default function Post({ post }: StaticProps) {
  return (
    <Container maxW="container.lg" mt={20} mb={10}>
      <Head>
        <title>{`${post.title} | Ariel Gerstein blog`}</title>
      </Head>
      <Box mb={10}>
        <Heading as="h1" fontWeight={500} mb={4}>
          {post.title}
        </Heading>
        <span>{post.date}</span>
      </Box>
      <Prose>
        <TinaMarkdown
          content={post.body}
          components={{
            html: Html,
            code_block: (props) => {
              if (!props?.value) return <></>;

              return (
                <SyntaxHighlighter language={props?.lang} PreTag="div">
                  {props?.value}
                </SyntaxHighlighter>
              );
            },
          }}
        />
      </Prose>
    </Container>
  );
}
