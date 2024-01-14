import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { ApiError, ApiErrorResponse } from 'types';

export const isFetchBaseQueryError = (
  error: any,
): error is FetchBaseQueryError => error.status !== undefined;

export const isSerializedError = (error: any): error is SerializedError =>
  error.name !== undefined &&
  error.message !== undefined &&
  error.stack !== undefined &&
  error.code !== undefined;

export const isApiError = (error: any): error is ApiError =>
  error.code !== undefined && error.message !== undefined;

export const isApiErrorResponse = (error: any): error is ApiErrorResponse =>
  error.status !== undefined &&
  error.data !== undefined &&
  Array.isArray(error.data.errors) &&
  error.data.errors.length > 0 &&
  isApiError(error.data.errors[0]);
