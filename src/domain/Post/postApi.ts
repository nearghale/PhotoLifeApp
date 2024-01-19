import {PageAPI} from '@api';

import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  let headersList = {
    Accept: '*/*',
    'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
    Authorization:
      'Bearer Mw.BXobhQXqSmTGNSoOAZvGG4Hi714vkhr8Wh4ndZBWwuiWgU0f9fijEtkCRojK',
  };

  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: headersList,
  });

  let data: PageAPI<PostAPI> = await response.json();

  return data;
}

export const PostApi = {
  getList,
};
