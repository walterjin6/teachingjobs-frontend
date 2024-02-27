import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { store } from '../store/store'
import { apiSlice } from '../store/apiSlice'
import 'react-quill/dist/quill.snow.css';
import JobList from './JobList'
import JobDetail from './JobDetail'
import { useNavigate, useLocation } from "react-router-dom"
import {
  useGetJobsQuery, useGetFiltersQuery, useGetQtyQuery
} from '../store/apiSlice'
import { useParams } from 'react-router-dom';
import { setJob } from '../store/postsSlice';
import { Helmet } from "react-helmet";
import { filterType, blurb } from "../utils/data";
import { BsHandbag } from 'react-icons/bs';
const JobSearch = () => {
  const filterValues9 = {
    'Country': 'Country',
    'State': 'State',
    'City': 'City',
    'Job Type(i.e. Faculty, Human Resources)': 'Job Type',
    'Faculty/Department(i.e. Science, Business)': 'Faculty/Department',
    'Academic Position Type(i.e. Lecturer, Fellow)': 'Academic Position Type',
    'Executive Jobs(i.e. Directors, Registrars)': 'Executive Jobs',
    'Employment Type(i.e. Full-time, casual)': 'Employment Type',
    'Institution Name': 'Institution Name',
    'Onsite/Remote': 'Onsite/Remote'
  };
  const job = useSelector((state) => state.posts.job)
  const componentRef = useRef(null);
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    if (componentRef.current) {
      console.log("Scrolling to top");
      componentRef.current.scrollTop = 0;
    }
  }, [job]);
  const region = useSelector((state) => state.posts.region)
  
  const [isShowFilter, setIsShowFilter] = useState(false)
  const [filter1, setfilter] = useState([])
  const [filterTypes, setfilterTypes] = useState(filterType)
  const [category, setCategory] = useState('')
  const [page, setPage] = useState(0);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let q = "", l = ""
  const { name } = useParams();
  const location = useLocation();
  //console.log(location.state.l)
  const keyWordRef = useRef('')
  const locationRef = useRef('')
  let blurbData
  if (name) {
    blurbData = blurb[name]
    q = name?.replace(/-/g, ' ');
  } else if (location.state?.q || location.state?.l) {
    // alert(location.state.l)
    q = location.state.q || ''
    l = location.state.l || ''
  } else {
    if (region !== "Global") l = region
  }
  useEffect(() => {
    setfilterTypes(prev => filterType.filter(item => !filter1.some(obj => obj.category === item)));
  }, [filter1]);
  // useEffect(() => {
  //   console.log('filter1', filter1)
  //   console.log('filterTypes',filterTypes)
  // }, [filter1, filterTypes]);
  useEffect(() => {
    store.dispatch(apiSlice.endpoints.getJobs.initiate())
    keyWordRef.current.value = q
    if (l) {
      locationRef.current.value = l
    } else {
      if (region !== "Global") locationRef.current.value = region
    }
    window.scrollTo(0, 0)
  }, []);
  const {
    data,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetJobsQuery({ q: q, l: l || '', page, filter1 })
  const {
    data: qty,
    isLoading: isLoadingQty,
    isSuccess: isSuccessQty,
  } = useGetQtyQuery({ q: q, l: l || '', filter1 })
  const {
    data: filters,
    isLoading: filtersIsLoading,
    isSuccess: filtersIsSuccess,
  } = useGetFiltersQuery({ category, filter1, q, l }, { skip: !category })
  useEffect(() => {
    if (data) dispatch(setJob(data[0]));
  }, [data, dispatch]);
  function nextPage() {
    console.log('nextPage')
    setPage(prev => prev + 1);
  }
  let content
  // useEffect(() => {
  //   console.log("filter1", filter1)
  //   console.log("filterTypes", filterTypes)
  // }, [filterTypes]);
  if (isLoading || isFetching) {
    content = (
      <div className='flex  w-full h-screen  justify-between'>
        <div role="status" className="w-[40%] h-screen p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
        <div role="status" className="w-[60%] h-screen p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  } else if (isSuccess && data) {
    console.log(data)
    if (data?.length > 0) {
      content = (
        <div className='w-full'>
          <div className='flex flex-col md:flex  md:justify-start py-4 px-6 mb-4 md:' >
            < div className='px-2 pb-4 flex justify-start items-start  font-bold gap-2 ' >
              <BsHandbag />
              {qty && <h1>{`9156 teaching jobs found`}</h1>}
              {/* ${qty} */}
            </div >
            <div className=' flex flex-col hidden md:block '>
              {// 顶层已选X  top
                filter1.length > 0 &&
                <div className='md:flex md:gap-4 md:flex-wrap pl-4 pb-2'>
                  {filter1.map(({ category, filter }, i) =>
                    <button key={i} className='btn  btn-xs bg-blue-900 text-white '
                      onClick={() => {
                        const updatedFilter = filter1.filter((_, index) => index !== i);
                        setPage(0)
                        setfilter(updatedFilter);
                       
                      }}
                    >
                      {`${filter} X`}
                    </button>
                  )}
                </div>
              }
              <div className='flex gap-4 flex-wrap px-4'>
                {filterTypes?.length > 0 &&   // 中层大目录m
                  filterTypes.map((filterType) => <button
                    className={`px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold ${category === filterType ? 'bg-orange-500 text-white border-orange-500' : 'bg-white border-gray-500'}`}
                    onClick={() => {
                      if (category === filterType) {
                        setIsShowFilter(prev => !prev)
                      } else {
                        setIsShowFilter(true)
                      }
                      console.log(filterType)
                      setCategory(filterType)
                    }}
                  >{filterValues9[filterType]}</button>)}
              </div>
              {
                isShowFilter &&
                <div className='grid md:grid-cols-4 gap-1 grid-cols-2 pl-6 py-2'>
                  {filters?.length > 0 && // 低层小目录b
                    filters.map(({ filter, job_count }) => <button
                      className='text-left text-gray-500 text-sm truncate'
                      onClick={() => {
                        setPage(0)
                        setfilter([...filter1, { category, filter }])
                        setIsShowFilter(false)
                      }}
                    >{`${filter ? filter : 'Others'}  (${job_count})`}</button>)}
                </div>
              }
            </div>
          </div>
          <details class="bg-gray-300 open:bg-[amber-200] duration-300 md:hidden mt-[-2rem] mb-4 ">
            <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer pl-8">Filters</summary>
            <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
              <div className='flex flex-col md:flex  md:justify-start py-4 px-6 mb-4' >
                <div className=' flex flex-col  '>
                  {// 顶层已选X  top
                    filter1.length > 0 &&
                    <div className='md:flex md:gap-4 md:flex-wrap pl-4 pb-2'>
                      {filter1.map(({ category, filter }, i) =>
                        <button key={i} className='btn  btn-xs bg-blue-900 text-white '
                          onClick={() => {
                            const updatedFilter = filter1.filter((_, index) => index !== i);
                            setPage(0)
                            setfilter(updatedFilter);
                          }}
                        >
                          {`${filter} X`}
                        </button>
                      )}
                    </div>
                  }
                  <div className='flex gap-4 flex-wrap px-4'>
                    {filterTypes?.length > 0 &&   // 中层大目录m
                      filterTypes.map((filterType) => <button
                        className={`px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold ${category === filterType ? 'bg-orange-500 text-white border-orange-500' : 'bg-white border-gray-500'}`}
                        onClick={() => {
                          if (category === filterType) {
                            setIsShowFilter(prev => !prev)
                          } else {
                            setIsShowFilter(true)
                          }
                          console.log(filterType)
                          setCategory(filterType)
                        }}
                      >{filterValues9[filterType]}</button>)}
                  </div>
                  {
                    isShowFilter &&
                    <div className='grid md:grid-cols-4 gap-1 grid-cols-2 pl-6 py-2'>
                      {filters?.length > 0 && // 低层小目录b
                        filters.map(({ filter, job_count }) => <button
                          className='text-left text-gray-500 text-sm truncate'
                          onClick={() => {
                            setPage(0)
                            setfilter([...filter1, { category, filter }])
                            setIsShowFilter(false)
                          }}
                        >{`${filter ? filter : 'Others'}  (${job_count})`}</button>)}
                    </div>
                  }
                </div>
              </div>
            </div>
          </details>
          <div className='flex  w-full gap-4  justify-between'>
            <div className='overflow-y-auto md:w-[40%] ' ><JobList endOfJobs={qty < ((page + 1) * 20)} data={data} nextPage={nextPage} /></div>
            <div ref={componentRef}  className=' hidden md:block overflow-y-auto w-[60%] top-0 h-screen sticky'><JobDetail /></div>
          </div>
        </div>
      )
    }
  } else {
    content = <p className='text-center text-2xl font-bold py-10'>Found No Jobs, Please use other keywords.</p>
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const a = {}
    if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()
    if (locationRef.current.value.trim()) a.l = locationRef.current.value.trim()
    navigate("/jobs/", { state: { q: keyWordRef.current.value.trim(), l: locationRef.current.value.trim() } });
  }
  return <div className='overflow-y w-full'>
    <Helmet>
      <title>Seek Teaching Jobs</title>
      <meta name="description" content="Welcome to the top job board for Academic Jobs, listing higher education jobs available in international colleges and universities daily. Use filters such as city, employment type, and institution name to help your job search" />
      <meta name="keywords" content="Find Academic Jobs, Seek Academic Jobs, Academic Jobs Search" />
    </Helmet>
    <div className=" ">{blurbData}</div>
    <div className="bg-gray-100 py-6 md:rounded-full rounded shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <form className="flex flex-col  gap-2 md:flex-row md:gap-0 mx-18 w-full " onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="text-center md:w-[45%] md:text-left px-4 py-2 border border-gray-200  rounded-3xl   md:rounded-[0px] md:rounded-l-full  focus:ring-orange-500 focus:border-orange-500 "
              placeholder="Type Keywords"
              ref={keyWordRef}
              defaultValue={name}
            />
            <input
              type="text"
              className="text-center md:w-[45%] md:text-left px-4 py-2 border border-gray-200  rounded-3xl  md:rounded-[0px] focus:ring-orange-500 focus:border-orange-500"
              placeholder="Location"
              ref={locationRef}
            />
            <button
              className="bg-[#f4a10c] hover:bg-orange-600 text-white py-2 px-6 md:rounded-[0px] md:rounded-r-full rounded-3xl focus:ring-2 focus:ring-orange-300 font-bold shadow-md"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
    {content}
  </div>
}
export default JobSearch
