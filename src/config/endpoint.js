const endpoint = {
  login: () => ({
    url: '/login',
  }),
  users: ({ page }) => ({
    url: '/users',
    queryParams: { page },
  }),
  user: ({ id }) => ({
    url: `/users/${id}`,
  }),
};

export default endpoint;
