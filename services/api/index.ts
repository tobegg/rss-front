import { Configuration, UsersApi, PostsApi } from '@/api';
import { apiUrl } from '@/core/constants';


const config = new Configuration({
  basePath: apiUrl,
  fetchApi: fetch,
  headers: {
    accept: 'application/json',
  },
});

export const UsersApiService = new UsersApi(config);
export const PostsApiService = new PostsApi(config);
