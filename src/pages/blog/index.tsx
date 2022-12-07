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

export default function Blog({ posts }: StaticProps) {
  return (
    <div>
      <h1>Blog</h1>
      <BlogPosts posts={posts} />
    </div>
  );
}
