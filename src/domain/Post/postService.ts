import {postAdapter} from './PostAdapter';
import {PostApi} from './postApi';
import {Post} from './postTypes';

async function getList(): Promise<Post[]> {
  const postPageAPI = await PostApi.getList();
  return postPageAPI.data.map(postAdapter.toPost);
}

export const postService = {
  getList,
};
