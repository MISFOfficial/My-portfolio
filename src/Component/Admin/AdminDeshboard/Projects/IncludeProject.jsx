import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

const IncludeProject = () => {

    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [projectImg, setProjectImg] = useState([])


    const onSubmit = (data) => {
        const update = {
            ...data, image: projectImg,
            ...data, date: new Date()
        }
        // console.log(update.image[0])

        fetch('https://my-portfollio-server.vercel.app/projects', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(() => {
                navigate('/deshboard/all_project')
            })
    }

    const handleImg = async (e) => {
        const img = e.target.files
        const imgArry = []
        // console.log(img)
        const imgData = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_img}`
        for (let i = 0; i < img.length; i++) {
            const formData = new FormData()
            formData.append('image', img[i])
            const res = await axios.post(imgData, formData)
            imgArry.push(res.data.data.url)
        }
        console.log(imgArry)
        setProjectImg(imgArry)
        // console.log(res.data.data.url)
    }

    return (
        <div className='w-full p-10'>
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                <div class="space-y-12 ">
                    <div class="">
                        <div class=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium ">Project Title</label>
                                <div class="mt-2">
                                    <input type="text"
                                        {...register('project', { required: true })}
                                        required
                                        className='p-1.5 bg-white text-black rounded-md w-full'
                                        placeholder="Title" />
                                </div>
                            </div>

                            <div class="col-span-full">
                                <label for="about" class="block text-sm/6 font-medium ">OverView</label>
                                <div class="mt-2">
                                    <textarea
                                        {...register('overView', { required: true })}
                                        required
                                        rows="3" class="block w-full rounded-md bg-white px-3 py-1.5 text-black " placeholder='Write your project theme'></textarea>
                                </div>
                                <p class="mt-3 text-sm/6 ">Write a few sentences about your project</p>
                            </div>

                            <div class="col-span-full">
                                <label for="about" class="block text-sm/6 font-medium ">Key Features</label>
                                <div class="mt-2">
                                    <textarea
                                        {...register('key_features', { required: true })}
                                        required
                                        rows="3" class="block w-full rounded-md bg-white px-3 py-1.5 text-black " placeholder='Write your project theme'></textarea>
                                </div>
                                <p class="mt-3 text-sm/6 ">Write a few sentences about your project</p>
                            </div>

                            <div class="col-span-full">
                                <label for="cover-photo" class="block text-sm/6 font-medium ">Project Thumbnail</label>
                                <div class="mt-2 flex justify-center rounded-lg border border-dashed  px-6 py-10">
                                    <div class="text-center">
                                        <svg class="mx-auto size-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                            <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd" />
                                        </svg>
                                        <div class="mt-4 flex text-sm/6 ">
                                            <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500">
                                                <input

                                                    onChange={handleImg}

                                                    id="file-upload" name="file-upload" type="file" class="pl-2 w-47" multiple required />
                                            </label>
                                            <p class="pl-1">or drag and drop</p>
                                        </div>
                                        <p class="text-xs/5 ">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-span-full">
                                <label for="about" class="block text-sm/6 font-medium ">Dependencies</label>
                                <div class="mt-2">
                                    <textarea
                                        {...register('dependencies', { required: true })}
                                        required
                                        rows="3" class="block w-full rounded-md bg-white px-3 py-1.5 text-black " placeholder='Write your project theme'></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class=" w-full">
                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 w-full ">
                            <div class="sm:col-span-3">
                                <label for="first-name" class="block text-sm/6 font-medium ">Tools</label>
                                <div class="mt-2">
                                    <input type="text"
                                        {...register('tools', { required: true })}
                                        required
                                        id="username"
                                        className='p-1.5 bg-white text-black rounded-md w-full'
                                        placeholder="What are the  Devolopent tools?" />
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="last-name" class="block text-sm/6 font-medium ">Clint Repositoy</label>
                                <div class="mt-2">
                                    <input type="text"
                                        {...register('clint_repo', { required: true })}
                                        required
                                        className='p-1.5 bg-white text-black rounded-md w-full'
                                        placeholder="Clint Repo Link:" />
                                </div>
                            </div>

                            <div class="col-span-full">
                                <label for="email" class="block text-sm/6 font-medium">Server Repository</label>
                                <div class="mt-2 w-full">
                                    <input type="text"
                                        {...register('server_repo', { required: true })}
                                        required
                                        className='p-1.5 bg-white text-black rounded-md w-full'
                                        placeholder="Server Repository Link:" />
                                </div>
                            </div>

                            <div class="col-span-full">
                                <label for="street-address" class="block text-sm/6 font-medium ">Live Link</label>
                                <div class="mt-2">
                                    <input type="text"
                                        {...register('live_link', { required: true })}
                                        required
                                        className='p-1.5 bg-white text-black rounded-md w-full'
                                        placeholder="LIve Link:" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500">Save</button>
                </div>
            </form>

        </div>
    );
};

export default IncludeProject;