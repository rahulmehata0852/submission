import React, { useEffect, useState } from 'react'
import { useAddDataMutation, useDeleteUserdataMutation, useGetDataQuery, useGetUserdataQuery, useUpdateUserdataMutation } from '../redux/Api';
import { motion } from "framer-motion"
import { toast } from 'react-toastify';
const Home = () => {


    const [userResponse, setUserResponse] = useState({})
    const [selectedProject, setselectedProject] = useState({})

    const { data, isLoading } = useGetDataQuery()
    const [addDataTrigger, { isSuccess, error }] = useAddDataMutation()
    const [deleteDataTrigger, { isSuccess: delIsSuccess }] = useDeleteUserdataMutation()
    const [updateDataTrigger, { isSuccess: updateSuccess }] = useUpdateUserdataMutation()
    const { data: userData, isLoading: uisLoading } = useGetUserdataQuery()

    const handleChange = e => {
        setUserResponse({ ...userResponse, [e.target.name]: e.target.value })
    }

    const handleClick = e => {
        addDataTrigger(userResponse)
    }

    const handleEditChange = e => {
        setselectedProject({ ...selectedProject, [e.target.name]: e.target.value })
    }

    const handleUpdate = e => {
        updateDataTrigger(selectedProject)
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success("Project added successfully")
        }
    }, [isSuccess])

    useEffect(() => {
        if (delIsSuccess) {
            toast.success("Project deleted successfully")
        }
    }, [delIsSuccess])
    useEffect(() => {
        if (updateSuccess) {
            toast.success("Project update successfully")
        }
    }, [updateSuccess])



    return (
        <div className="bg-stone-100 p-6 md:ms-[241px]">


            {/* <pre>{JSON.stringify(data, null, 1)}</pre> */}
            <h1 className="font-semibold text-[35px]">My Projects</h1>


            <div className="mt-8 ">



                <div className="card card-compact md:w-96   shadow-md bg-white p-3 rounded-sm ">
                    <div className="relative h-[180px] md:w-[360px] bg-[#FA782F] rounded-md flex-row gap-5 flex justify-center items-center">
                        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.5417 17.6667C41.4744 17.6608 45.3193 18.8297 48.5833 21.0233V8.83333C48.5833 6.49059 47.6527 4.24379 45.9961 2.58722C44.3395 0.930652 42.0927 0 39.75 0L8.83333 0C6.49059 0 4.24379 0.930652 2.58722 2.58722C0.930652 4.24379 0 6.49059 0 8.83333L0 39.75C0 42.0927 0.930652 44.3395 2.58722 45.9961C4.24379 47.6527 6.49059 48.5833 8.83333 48.5833H21.0233C19.0242 45.5913 17.8749 42.1126 17.698 38.5185C17.5211 34.9243 18.3234 31.3496 20.0192 28.1757C21.7149 25.0019 24.2405 22.3479 27.3266 20.4971C30.4126 18.6463 33.9432 17.668 37.5417 17.6667Z" fill="white" />
                        </svg>
                        <div onClick={() => window.my_modal_3.showModal()} className="ps-6 pt-6  absolute">

                            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5416 0.0833435C12.4842 0.0833435 9.49551 0.989958 6.9534 2.68854C4.41129 4.38713 2.42996 6.80139 1.25995 9.62603C0.0899498 12.4507 -0.216177 15.5588 0.380286 18.5574C0.97675 21.5561 2.44901 24.3105 4.6109 26.4724C6.77279 28.6343 9.5272 30.1065 12.5258 30.703C15.5244 31.2994 18.6326 30.9933 21.4572 29.8233C24.2819 28.6533 26.6961 26.672 28.3947 24.1299C30.0933 21.5878 30.9999 18.599 30.9999 15.5417C30.9953 11.4433 29.3651 7.51414 26.4671 4.61615C23.5691 1.71816 19.64 0.0880193 15.5416 0.0833435ZM19.9583 17.75H17.7499V19.9583C17.7499 20.544 17.5173 21.1057 17.1031 21.5199C16.689 21.934 16.1273 22.1667 15.5416 22.1667C14.9559 22.1667 14.3942 21.934 13.9801 21.5199C13.5659 21.1057 13.3333 20.544 13.3333 19.9583V17.75H11.1249C10.5392 17.75 9.97754 17.5173 9.5634 17.1032C9.14926 16.6891 8.91659 16.1274 8.91659 15.5417C8.91659 14.956 9.14926 14.3943 9.5634 13.9801C9.97754 13.566 10.5392 13.3333 11.1249 13.3333H13.3333V11.125C13.3333 10.5393 13.5659 9.97763 13.9801 9.56348C14.3942 9.14934 14.9559 8.91668 15.5416 8.91668C16.1273 8.91668 16.689 9.14934 17.1031 9.56348C17.5173 9.97763 17.7499 10.5393 17.7499 11.125V13.3333H19.9583C20.5439 13.3333 21.1056 13.566 21.5198 13.9801C21.9339 14.3943 22.1666 14.956 22.1666 15.5417C22.1666 16.1274 21.9339 16.6891 21.5198 17.1032C21.1056 17.5173 20.5439 17.75 19.9583 17.75Z" fill="white" />
                            </svg>
                        </div>
                    </div>


                    <div className="card-actions flex-col justify-center items-center">

                        <h1 style={{ lineHeight: "30.69px", letterSpacing: "2%" }} className="text-[19px] font-bold mt-4">Create a new project</h1>
                        <h1 className='font-semibold'>or  try a <span className='text-[#FA782F]  my-1'>sample project</span></h1>

                    </div>

                </div>

                {/* Loading start */}

                {
                    isLoading ? <div className='flex justify-center items-center pt-10'>
                        <span className="loading loading-spinner loading-lg"></span>

                    </div>
                        : <></>
                }

                {/* Loading end */}



                {/* Data of api */}
                <div className="md:grid-cols-2 lg:grid-cols-3 grid gap-11 mt-7">


                    {
                        data && data.map(item => <div key={item.id}>
                            <div className="card card-compact  bg-base-100 shadow-lg">
                                <div className="card-body">
                                    <img onClick={() => {
                                        window.my_modal_5.showModal()
                                        setselectedProject(item)
                                    }} height={item.height} width={item.width} src={item.download_url} alt="shoes" />
                                    <h2 className="card-title">{item.author}</h2>
                                    <p><a className='text-blue-500' href={item.url}>Download URL</a></p>

                                </div>
                            </div >
                        </div>)
                    }

                    {
                        uisLoading ? <div className='flex justify-center items-center pt-10'>
                            <span className="loading loading-spinner loading-lg"></span>

                        </div>
                            : <></>
                    }

                    {
                        userData && userData.map(item => <div key={item.id} className='border-4 border-opacity-55 rounded-xl border-orange-500 '>
                            <div key={item.id} className="card card-compact  bg-base-100  shadow-lg">
                                <div className="card-body">
                                    <img onClick={() => {
                                        window.my_modal_5.showModal()
                                        setselectedProject(item)
                                    }} height={item.height} width={item.width} src={item.download_url} alt="shoes" />
                                    <h2 className="card-title">{item.author}</h2>
                                    <p className='text-blue-600'><a className='' href={item.url}>Download URL</a></p>
                                    <div className="card-actions justify-end mt-4">
                                        <button onClick={e => deleteDataTrigger(item.id)} className="btn btn-error">Delete project</button>
                                        <button onClick={e => {
                                            setselectedProject(item)
                                            window.my_modal_4.showModal()
                                        }} className="btn btn-warning">Edit project</button>
                                    </div>
                                </div>
                            </div >
                        </div>)
                    }


                </div>

            </div>


            {/* Add modal start*/}

            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg text-center">Add project</h3>

                    <div className="my-5">

                        <input onChange={handleChange} type="text" className='my-2 input w-full border border-black' placeholder='Enter author' name="author" id="" />
                        <input onChange={handleChange} type="number" className='my-2 input w-full border border-black' placeholder='Enter width' name="width" id="" />
                        <input onChange={handleChange} type="number" className='my-2 input w-full border border-black' placeholder='Enter height' name="height" id="" />
                        <input onChange={handleChange} type="text" className='my-2 input w-full border border-black' placeholder='Enter url' name="url" id="" />
                        <input onChange={handleChange} type="text" className='my-2 input w-full border border-black' placeholder='Enter download_url' name="download_url" id="" />


                        <button onClick={handleClick} type="submit" className="mt-4 btn w-full btn-warning">Add Project</button>

                    </div>

                </form>
            </dialog>

            {/* Edit modal start*/}

            <dialog id="my_modal_4" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg text-center">Edit Project Data!</h3>

                    <div className="my-5">

                        <input onChange={handleEditChange} value={selectedProject.author} type="text" className='my-2 input w-full border border-black' placeholder='Enter author' name="author" id="" />
                        <input onChange={handleEditChange} value={selectedProject.width} type="number" className='my-2 input w-full border border-black' placeholder='Enter width' name="width" id="" />
                        <input onChange={handleEditChange} value={selectedProject.height} type="number" className='my-2 input w-full border border-black' placeholder='Enter height' name="height" id="" />
                        <input onChange={handleEditChange} value={selectedProject.url} type="text" className='my-2 input w-full border border-black' placeholder='Enter url' name="url" id="" />
                        <input onChange={handleEditChange} value={selectedProject.download_url} type="text" className='my-2 input w-full border border-black' placeholder='Enter download_url' name="download_url" id="" />


                        <button onClick={handleUpdate} type="submit" className="mt-4 btn w-full btn-warning">Update Project</button>

                    </div>

                </form>
            </dialog>

            {/* Edit modal end*/}



            {/* Detail mdoal start */}



            <dialog id="my_modal_5" className="modal bg-gradient-to-r from-orange-400 to-yellow-500">
                <form method="dialog" className="h-screen w-100  modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold  text-xl">Hello!</h3>

                    <div className="py-5">

                        <img src={selectedProject.download_url} alt="" />
                    </div>

                    <div className="mt-4">

                        <h2 className='font-bold text-3xl text-center'>{selectedProject.author}</h2>
                    </div>
                </form>
            </dialog>




            {/* Detail mdoal end */}










        </div >
    )
}

export default Home