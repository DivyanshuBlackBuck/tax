import React, { useEffect, useState } from 'react'
import { MdCarRental } from "react-icons/md";
import { LuShare2 } from "react-icons/lu";
import { MdOutlineAddRoad } from "react-icons/md";
import { TbMapCheck } from "react-icons/tb";
import { GiModernCity } from "react-icons/gi";
import './IncomeTax.css'
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useBlogsRedux } from '../../redux/reduxHooks';
import { toast, ToastContainer } from 'react-toastify';
import LoadingComponent from '../../component/Loading/Loading';

const IncomeTax = () => {
  const { getGstBlogs, getGstBlogResponse, getGstBlogError, getGstBlogLoading } = useBlogsRedux()

  const icons = [
    <MdCarRental />,
    <LuShare2 />,
    <MdOutlineAddRoad />,
    <TbMapCheck />,
    <GiModernCity />
  ];

  const colors = ["#079af0", "#fea632", "rgb(255, 72, 72)", "#00b072", "#151515"];
  const getRandomValue = (array, id) => {
    return array[id % array.length]; // Unique लेकिन Predictable
  };

  const navigate = useNavigate();
  const [gstBlogs, setGstBlogs] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getGstBlogs()
  }, []);
  console.log("gstBlogs", gstBlogs);


  useEffect(() => {
    if (getGstBlogResponse && loading) {
      setGstBlogs(getGstBlogResponse)
      toast.success('Blog Get successfully!');
    }
    if (getGstBlogError && loading) {
      toast.error('Blog Not Get')
    }
  }, [getGstBlogResponse, getGstBlogError])

  return (
    <div className='common_Container'>
      <div className="common_head"  >
        <h1>Income Tax Page</h1>
        <h2>Home / Income Tax Page</h2>
      </div>
      {getGstBlogLoading ? <LoadingComponent /> :

        <div className="IncomeTax_main">
          <div className="Income_cardGrid">
            {/* {data?.map((item) => { */}
            {getGstBlogResponse?.map((item, index) => {
              // अगर database में icon और bg नहीं है तो default assign करें
              const icon = getRandomValue(icons, index);
              const bg = getRandomValue(colors, index);
              console.log("icon", icon);
              console.log("bg", bg);
              return (
                <div className="Income_cardMain" key={item?.id}>
                  <div data-color={bg} className="Income_iconView">
                    {icon}
                  </div>
                  <h4 className="Income_title">{item?.title}</h4>
                  <div className="Income_des">{item?.description?.slice(0, 150) + `.......`}</div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button
                      className="Income_read_more_btn"
                    // onClick={() => setExpanded(prev => ({ ...prev, [item?.id]: !isExpanded }))}
                    >
                      {/* {isExpanded ? "Read Less" : "Read More"} */}
                      {"Read More"}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      }

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}


export default IncomeTax