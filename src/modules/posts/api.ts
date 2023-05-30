import { client } from '../../../tina/__generated__/client';
import { PostQuery } from '../../../tina/__generated__/types';

export const formatPost = (post: PostQuery['post']) => ({
  ...post,
  date: post.date ? new Date(post.date).getTime() : undefined,
});

export async function getPostsUrls() {
  const pagesListData = await client.queries.postConnection();
  return pagesListData.data.postConnection?.edges?.map(
    (page) => page?.node?._sys.filename,
  );
}

export async function getPostByUrl(id: string) {
  const response = await client.queries.post({ relativePath: `${id}.md` });
  return formatPost(response.data.post);
}

export async function getOrderedPosts() {
  const tinaProps = await client.queries.postConnection();
  const posts = tinaProps.data.postConnection.edges?.map((p) => p!.node!);
  const getOrderedPosts = posts?.map(formatPost)?.sort((a, b) => {
    if (!a.date || !b.date) return 0;

    return b?.date - a?.date;
  });
  return getOrderedPosts;
}
