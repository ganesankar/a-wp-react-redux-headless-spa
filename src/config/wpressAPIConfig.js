//WPRESS API Configuration
const wpressAPIConfig = () => {
  return {
    DEFAULT_HEADERS: {},
    
    FETCH_HOME_PAGE_DATA: {
      url:
        '/api/get_posts/'
    },
    FETCH_POSTLIST_PAGE_DATA: {
      url:
        '/api/get_posts'
    },
    FETCH_CATEGORYLIST_PAGE_DATA: {
      url:
        '/api/get_category_posts/?slug='
    },
    FETCH_POSTDETAIL_PAGE_DATA: {
      url:
        '/api/get_post'
    },
    FETCH_POSTTYPELIST_PAGE_DATA: {
      url:
        '/api/get_posts/?post_type='
    },
    FETCH_PAGE_DETAIL_DATA: {
      url:
      '/api/get_page'
    },
    
  };
};

export default wpressAPIConfig;