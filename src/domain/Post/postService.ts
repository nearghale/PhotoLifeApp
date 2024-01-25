import {apiAdapter} from '@api';
import {Page} from '@types';

import {postAdapter} from './PostAdapter';
import {PostApi} from './postApi';
import {Post} from './postTypes';

async function getList(page: number): Promise<Page<Post>> {
  const postPageAPI = await PostApi.getList({page, per_page: 10});

  return {
    data: postPageAPI.data.map(postAdapter.toPost),
    meta: apiAdapter.toMetaDataPage(postPageAPI.meta),
  };
}

export const postService = {
  getList,
};
