import {useState} from 'react';

import {PostComment, postCommentService} from '..';

interface Options {
  onSuccess?: (data: PostComment) => void;
  onError?: (message: string) => void;
}

export function usePostCommentCreate(postId: number, options?: Options) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function createComment(message: string) {
    try {
      setLoading(true);
      const postComment = await postCommentService.create(postId, message);
      if (options?.onSuccess) {
        options.onSuccess(postComment);
      }
      setError(null);
    } catch (error) {
      if (options?.onError) {
        options.onError('Erro ao criar comentários');
      }
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {createComment, loading, error};
}
