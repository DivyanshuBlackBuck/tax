import React, { useEffect, useState } from 'react'
import { MdCarRental } from "react-icons/md";
import { LuShare2 } from "react-icons/lu";
import { MdOutlineAddRoad } from "react-icons/md";
import { TbMapCheck } from "react-icons/tb";
import { GiModernCity } from "react-icons/gi";
import './Gst.css'
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useBlogsRedux } from '../../redux/reduxHooks';
import { toast, ToastContainer } from 'react-toastify';
import LoadingComponent from '../../component/Loading/Loading';

const Gst = () => {
  const { getGstBlogs, getGstBlogResponse, getGstBlogError, getGstBlogLoading } = useBlogsRedux()
  const data = [
    {
      id: 1,
      title: "Banking / Securities",
      des: "ICICI Securities Kotak Securities HDFC Sales ING Vysya Reliance Securities",
      icon: <MdCarRental />,
      bg: "#079af0",
    },
    {
      id: 2,
      title: "Insurance",
      des: "ICICI Prudential Life Insurance Birla Sun Life Insurance Kotak Life Insurance HDFC Life Insurance Met Life Insurance Bharti AXA Future Generali",
      icon: <LuShare2 />,
      bg: "#fea632",
    },
    {
      id: 3,
      title: "Corporate / Business",
      des: "Mittal Corp Guruji Products Capital Aim LMS Inida Synoris Technologies Radisson Blu Covetus Technologies Future Technologies Stellar Furniture Systematix Infotech",
      icon: <MdOutlineAddRoad />,
      bg: "rgb(255, 72, 72)",
    },
    {
      id: 4,
      title: "All-India Permits",
      des: "GGowithcar.com cars come with an All-India Tourist Permit so that you can drive from Kashmir to",
      icon: <TbMapCheck />,
      bg: "#00b072",
    },
    {
      id: 5,
      title: "Endless Opportunities",
      des: "The vehicles you rent from Gowithcar.com can be used for trips out of the city or daily travels through town. Gowithcar.com also provides cars for pick-up and drop-off services at Indore airports and Indore bus and train stations.",
      icon: <GiModernCity />,
      bg: "#151515",
    },
    {
      id: 6,
      title: "Banking / Securities",
      des: "ICICI Securities Kotak Securities HDFC Sales ING Vysya Reliance Securities",
      icon: <MdCarRental />,
      bg: "#079af0",
    },
    {
      id: 7,
      title: "Insurance",
      des: "ICICI Prudential Life Insurance Birla Sun Life Insurance Kotak Life Insurance HDFC Life Insurance Met Life Insurance Bharti AXA Future Generali",
      icon: <LuShare2 />,
      bg: "#fea632",
    },
    {
      id: 8,
      title: "Corporate / Business",
      des: "Mittal Corp Guruji Products Capital Aim LMS Inida Synoris Technologies Radisson Blu Covetus Technologies Future Technologies Stellar Furniture Systematix Infotech",
      icon: <MdOutlineAddRoad />,
      bg: "rgb(255, 72, 72)",
    },
    {
      id: 9,
      title: "All-India Permits",
      des: "GGowithcar.com cars come with an All-India Tourist Permit so that you can drive from Kashmir to",
      icon: <TbMapCheck />,
      bg: "#00b072",
    },
    {
      id: 10,
      title: "Endless Opportunities",
      des: "The vehicles you rent from Gowithcar.com can be used for trips out of the city or daily travels through town. Gowithcar.com also provides cars for pick-up and drop-off services at Indore airports and Indore bus and train stations.",
      icon: <GiModernCity />,
      bg: "#151515",
    },
    {
      id: 11,
      title: "Corporate / Business",
      des: "Mittal Corp Guruji Products Capital Aim LMS Inida Synoris Technologies Radisson Blu Covetus Technologies Future Technologies Stellar Furniture Systematix Infotech",
      icon: <MdOutlineAddRoad />,
      bg: "rgb(255, 72, 72)",
    },
    {
      id: 12,
      title: "All-India Permits",
      des: "GGowithcar.com cars come with an All-India Tourist Permit so that you can drive from Kashmir to",
      icon: <TbMapCheck />,
      bg: "#00b072",
    },
  ];
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
      console.log("getGstBlogResponse", getGstBlogResponse);
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
        <h1>Gst Page</h1>
        <h2>Home / Gst Page</h2>
      </div>

      {getGstBlogLoading ? <LoadingComponent /> :

        <div className="Gst_main">
          <div className="Gst_cardGrid">

            {getGstBlogResponse?.map((item, index) => {
              // अगर database में icon और bg नहीं है तो default assign करें
              const icon = getRandomValue(icons, index);
              const bg = getRandomValue(colors, index);
              console.log("icon", icon);
              console.log("bg", bg);
              return (
                <div className="Gst_cardMain" key={item?.id}>
                  <div data-color={bg} className="Gst_iconView">
                    {icon}
                  </div>
                  <h4 className="Gst_title">{item?.title}</h4>
                  <div className="Gst_des">{item?.description?.slice(0, 150) + `.......`}</div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button
                      className="read_more_btn"
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

export default Gst