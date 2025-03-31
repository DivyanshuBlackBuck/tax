import { useDispatch, useSelector } from "react-redux";
import { addGstBlogs, getGstBlogs } from "./slice/All.slice";

export function useBlogsRedux() {
  const res = useSelector((state) => {
    return state.blogs
  });

  const dispatch = useDispatch();

  return {

    gstBlogError: res?.gstBlogError,
    gstBlogLoading: res?.gstBlogLoading,
    gstBlogResponse: res?.gstBlogResponse,

    getGstBlogError: res?.getGstBlogError,
    getGstBlogLoading: res?.getGstBlogLoading,
    getGstBlogResponse: res?.getGstBlogResponse,

    addGstBlogs: (data) => dispatch(addGstBlogs(data)),
    getGstBlogs: () => dispatch(getGstBlogs()),
  };
}
