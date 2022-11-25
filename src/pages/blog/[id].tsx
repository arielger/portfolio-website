import { GetStaticProps } from 'next';
import { getAllPostIds, getPostData } from '@/utils/posts';
import { IPost } from '@/types/blog';

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
  return {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    props: { post: getPostData(params!.id) },
  };
};

export default function Post({ post }: StaticProps) {
  return (
    <div>
      <h2>{post.title}</h2>
      <span>{post.date}</span>
    </div>
  );
}
