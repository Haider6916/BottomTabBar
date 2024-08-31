import {useEffect} from 'react';
import {useMutation, useQuery} from '@tanstack/react-query';

import useAppContext from 'Context';

export const useAppQuery = ({queryKey, queryFn, onSuccess, onError, select, onSettled, refetchInterval, showLoading = false, options = {}}) => {
  const {startLoading, stopLoading} = useAppContext();

  const {isLoading, ...query} = useQuery({
    ...options,
    queryKey,
    queryFn,
    onSuccess: data => {
      if (onSuccess) onSuccess(data);
    },
    onError: error => {
      if (onError) onError(error);
    },
    onSettled: (data, error) => {
      if (showLoading) stopLoading();
      if (onSettled) onSettled(data, error);
    },
    select: select,
    refetchInterval,
  });

  useEffect(() => {
    if (showLoading && isLoading) {
      startLoading();
    }
  }, [isLoading]);

  return {isLoading, ...query};
};

export const useAppMutation = ({mutationFn, onSuccess, onError, onMutate, onSettled, showLoading = false, options = {}}) => {
  const {startLoading, stopLoading} = useAppContext();
  return useMutation({
    ...options,
    mutationFn,
    onSuccess: (data, variables) => {
      if (onSuccess) onSuccess(data, variables);
    },
    onError: (error, variables) => {
      if (onError) onError(error, variables);
    },
    onMutate: variables => {
      if (showLoading) startLoading();
      if (onMutate) onMutate(variables);
    },
    onSettled: (data, error, variables) => {
      if (showLoading) stopLoading();
      if (onSettled) onSettled(data, error, variables);
    },
  });
};
