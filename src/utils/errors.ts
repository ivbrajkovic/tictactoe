import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import {
  isApiErrorResponse,
  isFetchBaseQueryError,
  isSerializedError,
} from 'guards/guards';
import { ApiErrorResponse } from 'types';

type ErrorType =
  | FetchBaseQueryError
  | SerializedError
  | ApiErrorResponse
  | Error
  | string;

export const getErrorMessage = (error: ErrorType) => {
  if (typeof error === 'string') return error;
  if (error instanceof Error) return error.message;
  if (isApiErrorResponse(error)) return error.data.errors[0].message;
  if (isSerializedError(error)) return error.message;
  if (isFetchBaseQueryError(error)) {
    if (error.status === 400) return 'Bad request';
    if (error.status === 401) return 'You are not authorized';
    if (error.status === 403) return 'You are not allowed to do this';
    if (error.status === 404) return 'Not found';
    if (error.status === 500) return 'Server error';
    if (error.status === 'CUSTOM_ERROR') return error.error;
    if (error.status === 'FETCH_ERROR') return error.error;
    if (error.status === 'PARSING_ERROR') return error.error;
    if (error.status === 'TIMEOUT_ERROR') return error.error;
  }
  return 'Something went wrong';
};
