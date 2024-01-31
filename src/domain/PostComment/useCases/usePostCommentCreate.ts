import {MutationOptions, useMutation} from '@infra';

import {PostComment, postCommentService} from '..';

export function usePostCommentCreate(
  postId: number,
  options?: MutationOptions<PostComment>,
) {
  const {mutate, error, loading} = useMutation<{message: string}, PostComment>(
    ({message}) => postCommentService.create(postId, message),
    options,
  );

  async function createComment(message: string) {
    await mutate({message});
  }

  return {createComment, loading, error};
}
