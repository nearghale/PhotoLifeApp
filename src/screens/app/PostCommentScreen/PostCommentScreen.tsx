import React from 'react';

import {usePostCommentList} from 'src/domain/PostComment/useCases/usePostCommentList';

import {Box, Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;

  const {list} = usePostCommentList(postId);

  return (
    <Screen title="Comentários" canGoBack>
      <Box />
    </Screen>
  );
}
