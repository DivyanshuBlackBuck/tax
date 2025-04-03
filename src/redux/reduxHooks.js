import { useDispatch, useSelector } from "react-redux";
import { addGstBlogs, addService, getGstBlogs, getService, setSelectedService } from "./slice/All.slice";

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

    addServiceError: res?.addServiceError,
    addServiceLoading: res?.addServiceLoading,
    addServiceResponse: res?.addServiceResponse,

    getServiceResponse: res?.getServiceResponse,
    getServiceError: res?.getServiceError,
    getServiceLoading: res?.getServiceLoading,

    selectedService: res?.selectedService,


    addGstBlogs: (data) => dispatch(addGstBlogs(data)),
    getGstBlogs: () => dispatch(getGstBlogs()),

    setSelectedService: (data) => dispatch(setSelectedService(data)),
    addService: (data) => dispatch(addService(data)),
    getService: () => dispatch(getService())
  };
}
