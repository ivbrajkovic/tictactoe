export type ApiError = {
  path: string;
  code: string;
  message: string;
};

export type ApiErrorResponse = {
  status: number;
  data: {
    errors: ApiError[];
  };
};
