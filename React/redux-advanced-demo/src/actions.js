import axios from 'axios';


export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}


export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}


export const REQUEST_POSTS = 'REQUEST_POSTS'
export function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}


export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}


export function fetchPosts(subreddit) {
  return function(dispatch) {
    dispatch(requestPosts(subreddit));
    return axios.get(`http://www.subreddit.com/r/${subreddit}.json`)
      .then(response => {
        dispatch(receivePosts(subreddit, response.data))
      });
  }
}


function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
}


export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      // 在 thunk 里 dispatch 另一个 thunk！
      return dispatch(fetchPosts(subreddit))
    } else {
      // 告诉调用代码不需要再等待。
      return Promise.resolve()
    }
  }
}
