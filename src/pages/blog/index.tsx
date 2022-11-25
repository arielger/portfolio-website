import { GetStaticProps } from 'next';
import { getSortedPostsData } from 'utils/posts';
import { Post } from '@/types/blog';

interface StaticProps {
  posts: Post[];
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
      <section>
        {posts.map(({ id, date, title }) => (
          <article key={id}>
            <h2>{title}</h2>
            <span>{date}</span>
          </article>
        ))}
      </section>
    </div>
  );
}
