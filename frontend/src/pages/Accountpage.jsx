import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import Footer from '../components/Footer'
import {Grid ,Box, Text } from "@radix-ui/themes"
import { MdOutlineSportsScore, MdLocalMovies } from "react-icons/md";
import { FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { IoBookSharp } from "react-icons/io5";
import { useApi } from '../Context/Contxt';
import * as Avatar from '@radix-ui/react-avatar';
import { MagicWandIcon } from '@radix-ui/react-icons'
export default React.memo(function AccountPage() {
    const [searchResults, setSearchResults] = useState()
    const [alluser, setalluser] = useState([]);
    const handleSearchChange = (e) => {
        setSearchResults(e.target.value);
    };
    useEffect(() => {
        const allUsers = async (e) => {
          
            try {
                const response = await axios.get('http://localhost:5000/api/users/all');
                setalluser(response.data);

            } catch (error) {
                console.error('Error in getting all users:', error.message)
            }
        };
        allUsers();
    }, []);
    console.log(alluser)

    const { userData } = useApi();
    const navigate = useNavigate();
    return (
        <>
            {localStorage.getItem("uid")?
                // <div className='bg-custom-30'>
                //     <Navbar />
                //     <div className='bg-custom-30 grid gri md:grid-cols-4 md:grid p-4'>
        
                //         <div className=' w-max max-h-[500px] border rounded-lg bg-white m-1 '>
                //             <div className='relative'>
                //                 <form onSubmit={() => navigate(`/search/${searchResults}`)} className='flex items-center text-gray-600'>
                //                     <input type="text" name='search' placeholder='Search' className='pl-10 pr-5 py-2 placeholder-gray-500 text-black rounded-full' value={searchResults} onChange={handleSearchChange} />
                //                     <svg className='absolute left-3 top-2' width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                //                         <path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                //                     </svg>

                //                 </form>


                //             </div>
           

                //             <img className='h-[400px] border border-black p-2 rounded-md' src="https://i.ibb.co/ncrXc2V/1.png" alt=" no im" />
                //             <table className='border-separate m-1 text-center  w-[300px] border border-slate-500 '>
                //                 <tbody>
                //                     <tr>
                //                         <td class="border border-slate-700 ...">{userData?.name}</td>
                //                     </tr>
                //                     <tr>
                //                         <td class="border border-slate-700 ...">Friends: {userData?.friendCount}</td>
                //                     </tr>
                //                     <tr>
                //                         <td class="border border-slate-700 ...">JOINED ON:{userData?.joinedOn}</td>
                //                     </tr>
                //                 </tbody>
                //             </table>
                //         </div>
                //         <div className='col-span-3 '>
                //             <div>
                //                 <div className=' h-[150px] gap-3 ml-3 font-bold mr-3 text-custom-50 text-xl grid grid-cols-4 md:grid md:grid-cols-4 font-mono border border-black rounded-lg bg-custom-40 p-10'>
                //                     <div className='p-4  border border-gray-900 rounded-lg bg-custom-20'>
                   
                //                         <p >Liked Movies </p>
                //                         <button onClick={() => navigate('/account/favlist')} className=' bg-black rounded-md p-3 m-1 text-white '>Watch</button></div>
                //                     <div className=' p-10 border border-gray-900 rounded-lg bg-custom-20'>
                //                         <p>Recently Watched </p>
                //                         <button onClick={() => navigate('/account/favlist')} className='bg-black rounded-md p-3 m-1 text-white '>Watch</button>
                //                     </div>
                //                     <div className='p-4 border border-gray-900 rounded-lg bg-custom-20'>
                //                         <p>Watchlist </p>
                //                         <button onClick={() => navigate('/account/favlist')} className='bg-black rounded-md p-3 m-1 text-white '>Watch</button></div>
                //                     <div className='p-4 border border-gray-900 rounded-lg bg-custom-20' >
                //                         <p>yet to watch </p>
                //                         <button onClick={() => navigate('/account/favlist')} className='bg-black rounded-md p-3 m-1 text-white '>Watch</button>
                //                     </div>
                //                 </div>
                //                 {/* <div className="grid grid-cols-2 md:grid-cols-3 p-3">
                              
                //                     <div className="w-1/1 p-1 m-1 bg-black  border border-black rounded-lg">
                //                         <div className="bg-gray-200 h-32">Item 1</div>
                //                     </div>
                //                     <div className="w-1/1 p-1 m-1 bg-black  border border-black rounded-lg">
                //                         <div className="bg-gray-200 h-32">Item 2</div>
                //                     </div>
                //                     <div className="w-1/1 p-1 m-1 bg-black  border border-black rounded-lg">
                //                         <div className="bg-gray-200 h-32">Item 3</div>
                //                     </div>
                //                     <div className="w-1/1 p-1 m-1 bg-black  border border-black rounded-lg">
                //                         <div className="bg-gray-200 h-32">Item 4</div>
                //                     </div>
                //                     <div className="w-1/1 p-1 m-1 bg-black  border border-black rounded-lg">
                //                         <div className="bg-gray-200 h-32">Item 5</div>
                //                     </div>
                //                     <div className="w-1/1 p-1 m-1 bg-black  border border-black rounded-lg">
                //                         <div className="bg-gray-200 h-32">Item 6</div>
                //                     </div>
                //                     <div className="w-1/1 p-1 m-1 bg-black  border border-black rounded-lg">
                //                         <div className="bg-gray-200 h-32">Item 4</div>
                //                     </div>
                //                     <div className="w-1/1 p-1 m-1 bg-black  border border-black rounded-lg">
                //                         <div className="bg-gray-200 h-32">Item 5</div>
                //                     </div>
                //                     <div className="w-1/1 p-1 m-1 bg-black  border border-black rounded-lg">
                //                         <div className="bg-gray-200 h-32">Item 6</div>
                //                     </div>
                           
                //                 </div> */}
                //             </div>
                //         </div>
                //     </div>
            
        
                //     <Footer />
                // </div>
                <section className='bg-custom-30'>
                    <Navbar />
                  
                    <div class="p-2 relative mx-auto text-gray-600">
                        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search User " />
                            <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                            <MagicWandIcon className='bg-white ' />
                            </button>
                    </div>
                <div class="py-16">
                        
        <div class="mx-auto px-6 max-w-6xl text-gray-500">
            <div class="relative">
                <div class="relative z-10 grid gap-3 grid-cols-6">
                    <div class="col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                        <div class="size-fit m-auto relative">
                            <div class="relative h-24 w-56 flex flex-col items-center">
                                                <Text size={"7"} className='text-custom-20' >{userData?.name}</Text>    
                                                
                                               
                                                <Text>{userData?.friendCount}</Text>
                                                <Text>{ userData?.joinedOn}</Text>
                                 
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                        <div>
                            <div class="relative aspect-square rounded-full size-32 flex border mx-auto dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                                                <Avatar.Root className="bg-blackA1 inline-flex h-[100px] w-[100px] select-none items-center justify-center overflow-hidden rounded-full align-middle"  >
                                                    <Avatar.Image 
                                                        className="h-full w-full rounded-[inherit] object-cover border border-custom-10  "

                                                        alt="Colm Tuite"
                                                    />
                                                    <Avatar.Fallback
                                                        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
                                                        delayMs={600}
                                                    >
                                                    </Avatar.Fallback>
                                                </Avatar.Root>
                            </div>
                            <div class="mt-6 text-center relative z-10 space-y-2">
                                                <h2 class="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">{userData?.name} BIO</h2>
                                <p class="dark:text-gray-300 text-gray-700">Provident fugit and vero voluptate. magnam magni doloribus dolores voluptates a sapiente nisi.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                        <div>
                            <div class="pt-6 lg:px-6">
                                <svg class="w-full" viewBox="0 0 386 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="386" height="123" rx="10"></rect>
                                    <g clip-path="url(#clip0_0_106)">
                                        <circle class="text-blue-600 dark:text-blue-500" cx="29" cy="29" r="15" fill="currentColor"></circle>
                                        <path d="M29 23V35" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M35 29L29 35L23 29" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M55.2373 32H58.7988C61.7383 32 63.4404 30.1816 63.4404 27.0508V27.0371C63.4404 23.9404 61.7246 22.1357 58.7988 22.1357H55.2373V32ZM56.7686 30.6807V23.4551H58.6279C60.6719 23.4551 61.8818 24.7881 61.8818 27.0576V27.0713C61.8818 29.3613 60.6924 30.6807 58.6279 30.6807H56.7686ZM69.4922 32.1436C71.666 32.1436 72.999 30.6875 72.999 28.2949V28.2812C72.999 25.8887 71.6592 24.4326 69.4922 24.4326C67.3184 24.4326 65.9785 25.8955 65.9785 28.2812V28.2949C65.9785 30.6875 67.3115 32.1436 69.4922 32.1436ZM69.4922 30.9062C68.2139 30.9062 67.4961 29.9424 67.4961 28.2949V28.2812C67.4961 26.6338 68.2139 25.6699 69.4922 25.6699C70.7637 25.6699 71.4883 26.6338 71.4883 28.2812V28.2949C71.4883 29.9355 70.7637 30.9062 69.4922 30.9062ZM76.9111 32H78.4219L79.9531 26.4629H80.0693L81.6074 32H83.1318L85.1758 24.5762H83.7061L82.3799 30.3047H82.2637L80.7324 24.5762H79.3242L77.793 30.3047H77.6836L76.3506 24.5762H74.8604L76.9111 32ZM87.6934 32H89.1768V27.6455C89.1768 26.4492 89.8535 25.7041 90.9404 25.7041C92.0273 25.7041 92.54 26.3125 92.54 27.543V32H94.0166V27.1943C94.0166 25.4238 93.1006 24.4326 91.4395 24.4326C90.3594 24.4326 89.6484 24.9111 89.2861 25.7041H89.1768V24.5762H87.6934V32ZM97.1562 32H98.6396V21.6641H97.1562V32ZM104.992 32.1436C107.166 32.1436 108.499 30.6875 108.499 28.2949V28.2812C108.499 25.8887 107.159 24.4326 104.992 24.4326C102.818 24.4326 101.479 25.8955 101.479 28.2812V28.2949C101.479 30.6875 102.812 32.1436 104.992 32.1436ZM104.992 30.9062C103.714 30.9062 102.996 29.9424 102.996 28.2949V28.2812C102.996 26.6338 103.714 25.6699 104.992 25.6699C106.264 25.6699 106.988 26.6338 106.988 28.2812V28.2949C106.988 29.9355 106.264 30.9062 104.992 30.9062ZM113.307 32.123C114.291 32.123 115.07 31.6992 115.508 30.9473H115.624V32H117.094V26.9209C117.094 25.3623 116.041 24.4326 114.175 24.4326C112.486 24.4326 111.317 25.2461 111.14 26.4629L111.133 26.5107H112.562L112.568 26.4834C112.746 25.957 113.286 25.6562 114.106 25.6562C115.111 25.6562 115.624 26.1074 115.624 26.9209V27.5771L113.614 27.6934C111.844 27.8027 110.846 28.5752 110.846 29.9014V29.915C110.846 31.2617 111.892 32.123 113.307 32.123ZM112.322 29.8535V29.8398C112.322 29.1699 112.787 28.8008 113.812 28.7393L115.624 28.623V29.2588C115.624 30.2158 114.811 30.9404 113.703 30.9404C112.903 30.9404 112.322 30.5371 112.322 29.8535ZM122.893 32.123C123.932 32.123 124.745 31.6445 125.176 30.8311H125.292V32H126.769V21.6641H125.292V25.752H125.176C124.779 24.9521 123.911 24.4463 122.893 24.4463C121.006 24.4463 119.816 25.9297 119.816 28.2812V28.2949C119.816 30.626 121.026 32.123 122.893 32.123ZM123.316 30.8584C122.072 30.8584 121.327 29.8877 121.327 28.2949V28.2812C121.327 26.6885 122.072 25.7178 123.316 25.7178C124.547 25.7178 125.312 26.6953 125.312 28.2812V28.2949C125.312 29.8809 124.554 30.8584 123.316 30.8584Z" fill="currentColor"></path>
                                        <path d="M268.324 34H269.906V21.3174H268.333L264.958 23.7432V25.4131L268.184 23.0752H268.324V34ZM280.363 34H281.91V31.3721H283.712V29.957H281.91V21.3174H279.616C277.841 23.9629 275.898 27.0566 274.185 29.9307V31.3721H280.363V34ZM275.802 29.9658V29.8604C277.182 27.5312 278.843 24.9121 280.267 22.7852H280.372V29.9658H275.802ZM286.162 37.2256H287.296L288.676 32.2246H286.927L286.162 37.2256ZM296.672 34.2109C299.212 34.2109 301.075 32.6465 301.075 30.5283V30.5107C301.075 28.709 299.818 27.5576 297.973 27.3994V27.3643C299.555 27.0303 300.662 25.958 300.662 24.3936V24.376C300.662 22.4512 299.071 21.1064 296.654 21.1064C294.281 21.1064 292.646 22.4863 292.444 24.5518L292.436 24.6396H293.956L293.965 24.5518C294.097 23.2686 295.16 22.4775 296.654 22.4775C298.201 22.4775 299.071 23.2422 299.071 24.5693V24.5869C299.071 25.8525 298.017 26.7842 296.505 26.7842H294.984V28.1201H296.575C298.351 28.1201 299.467 28.9902 299.467 30.5459V30.5635C299.467 31.9082 298.333 32.8398 296.672 32.8398C294.984 32.8398 293.833 31.9785 293.71 30.7305L293.701 30.6426H292.181L292.189 30.748C292.356 32.752 294.053 34.2109 296.672 34.2109ZM310.434 34H311.98V31.3721H313.782V29.957H311.98V21.3174H309.687C307.911 23.9629 305.969 27.0566 304.255 29.9307V31.3721H310.434V34ZM305.872 29.9658V29.8604C307.252 27.5312 308.913 24.9121 310.337 22.7852H310.442V29.9658H305.872ZM323.297 34H324.826V28.1289C324.826 26.793 325.767 25.7119 327.006 25.7119C328.201 25.7119 328.975 26.4414 328.975 27.5664V34H330.504V27.9092C330.504 26.7051 331.374 25.7119 332.692 25.7119C334.028 25.7119 334.67 26.4062 334.67 27.8037V34H336.199V27.4521C336.199 25.4658 335.118 24.3584 333.185 24.3584C331.875 24.3584 330.794 25.0176 330.284 26.0195H330.144C329.704 25.0352 328.808 24.3584 327.524 24.3584C326.285 24.3584 325.389 24.9473 324.967 25.9668H324.826V24.5254H323.297V34ZM344.67 34.167C347.069 34.167 348.643 32.2246 348.643 29.2715V29.2539C348.643 26.2832 347.078 24.3584 344.67 24.3584C343.369 24.3584 342.235 25.0088 341.717 26.0195H341.576V20.7637H340.047V34H341.576V32.4883H341.717C342.297 33.543 343.352 34.167 344.67 34.167ZM344.318 32.8135C342.596 32.8135 341.541 31.46 341.541 29.2715V29.2539C341.541 27.0654 342.596 25.7119 344.318 25.7119C346.05 25.7119 347.078 27.0479 347.078 29.2539V29.2715C347.078 31.4775 346.05 32.8135 344.318 32.8135ZM352.016 37.1641H353.545V32.5059H353.686C354.204 33.5166 355.338 34.167 356.639 34.167C359.047 34.167 360.611 32.2422 360.611 29.2715V29.2539C360.611 26.3008 359.038 24.3584 356.639 24.3584C355.32 24.3584 354.266 24.9824 353.686 26.0371H353.545V24.5254H352.016V37.1641ZM356.287 32.8135C354.564 32.8135 353.51 31.46 353.51 29.2715V29.2539C353.51 27.0654 354.564 25.7119 356.287 25.7119C358.019 25.7119 359.047 27.0479 359.047 29.2539V29.2715C359.047 31.4775 358.019 32.8135 356.287 32.8135ZM367.254 34.167C369.407 34.167 371.051 32.998 371.051 31.3105V31.293C371.051 29.9395 370.189 29.166 368.405 28.7354L366.946 28.3838C365.83 28.1113 365.355 27.707 365.355 27.0654V27.0479C365.355 26.2129 366.182 25.6328 367.307 25.6328C368.449 25.6328 369.188 26.1514 369.39 26.8984H370.893C370.682 25.3516 369.302 24.3584 367.315 24.3584C365.303 24.3584 363.791 25.5449 363.791 27.1182V27.127C363.791 28.4893 364.591 29.2627 366.366 29.6846L367.834 30.0361C369.003 30.3174 369.486 30.7656 369.486 31.4072V31.4248C369.486 32.2861 368.581 32.8926 367.307 32.8926C366.094 32.8926 365.338 32.374 365.083 31.583H363.519C363.694 33.1475 365.145 34.167 367.254 34.167Z" fill="currentColor"></path>
                                    </g>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 123C3 123 14.3298 94.153 35.1282 88.0957C55.9266 82.0384 65.9333 80.5508 65.9333 80.5508C65.9333 80.5508 80.699 80.5508 92.1777 80.5508C103.656 80.5508 100.887 63.5348 109.06 63.5348C117.233 63.5348 117.217 91.9728 124.78 91.9728C132.343 91.9728 142.264 78.03 153.831 80.5508C165.398 83.0716 186.825 91.9728 193.761 91.9728C200.697 91.9728 206.296 63.5348 214.07 63.5348C221.844 63.5348 238.653 93.7771 244.234 91.9728C249.814 90.1684 258.8 60 266.19 60C272.075 60 284.1 88.057 286.678 88.0957C294.762 88.2171 300.192 72.9284 305.423 72.9284C312.323 72.9284 323.377 65.2437 335.553 63.5348C347.729 61.8259 348.218 82.07 363.639 80.5508C367.875 80.1335 372.949 82.2017 376.437 87.1008C379.446 91.3274 381.054 97.4325 382.521 104.647C383.479 109.364 382.521 123 382.521 123" fill="url(#paint0_linear_0_106)" ></path>
                                    <path class="text-blue-600 dark:text-blue-500" d="M3 121.077C3 121.077 15.3041 93.6691 36.0195 87.756C56.7349 81.8429 66.6632 80.9723 66.6632 80.9723C66.6632 80.9723 80.0327 80.9723 91.4656 80.9723C102.898 80.9723 100.415 64.2824 108.556 64.2824C116.696 64.2824 117.693 92.1332 125.226 92.1332C132.759 92.1332 142.07 78.5115 153.591 80.9723C165.113 83.433 186.092 92.1332 193 92.1332C199.908 92.1332 205.274 64.2824 213.017 64.2824C220.76 64.2824 237.832 93.8946 243.39 92.1332C248.948 90.3718 257.923 60.5 265.284 60.5C271.145 60.5 283.204 87.7182 285.772 87.756C293.823 87.8746 299.2 73.0802 304.411 73.0802C311.283 73.0802 321.425 65.9506 333.552 64.2824C345.68 62.6141 346.91 82.4553 362.27 80.9723C377.629 79.4892 383 106.605 383 106.605" stroke="currentColor" stroke-width="3"></path>
                                    <defs>
                                        <linearGradient id="paint0_linear_0_106" x1="3" y1="60" x2="3" y2="123" gradientUnits="userSpaceOnUse">
                                            <stop class="text-blue-300 dark:text-blue-600/30" stop-color="currentColor"></stop>
                                            <stop class="text-white dark:text-transparent" offset="1" stop-color="currentColor" stop-opacity="0.103775"></stop>
                                        </linearGradient>
                                        <clipPath id="clip0_0_106">
                                                            <rect width="358" height="30" fill="white" style={{ fill: 'white', fillOpacity: 1 }}
 transform="translate(14 14)"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div class="mt-14 text-center relative z-10 space-y-2">
                                <h2 class="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">Faster than light</h2>
                                <p class="dark:text-gray-300 text-gray-700">Provident fugit vero voluptate. magnam magni doloribus dolores voluptates inventore nisi.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                        <div class="grid sm:grid-cols-2">
                            <div class="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                                <div class="relative aspect-square rounded-full size-12 flex border dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                                    <svg class="size-6 m-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.5 7c2 0 6.5-3 6.5-3s4.5 3 6.5 3v4.5C18.5 18 12 20 12 20s-6.5-2-6.5-8.5z"></path>
                                    </svg>
                                    </div>
                                <div class="space-y-2">
                                    <h2 class="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">Faster than light</h2>
                                    <p class="dark:text-gray-300 text-gray-700">Provident fugit vero voluptate. Voluptates a sapiente inventore nisi.</p>
                                </div>
                            </div>
                            <div class="overflow-hidden relative mt-6 sm:mt-auto h-fit -mb-[34px] -mr-[34px] sm:ml-6 py-6 p-6 border rounded-tl-lg dark:bg-white/5 dark:border-white/10">
                                <div class="absolute flex gap-1 top-2 left-3">
                                    <span class="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                    <span class="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                    <span class="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                </div>
                                <svg class="w-full sm:w-[150%]" viewBox="0 0 366 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.148438 231V179.394L1.92188 180.322L2.94482 177.73L4.05663 183.933L6.77197 178.991L7.42505 184.284L9.42944 187.985L11.1128 191.306V155.455L13.6438 153.03V145.122L14.2197 142.829V150.454V154.842L15.5923 160.829L17.0793 172.215H19.2031V158.182L20.7441 153.03L22.426 148.111V142.407L24.7471 146.86V128.414L26.7725 129.918V120.916L28.1492 118.521L28.4653 127.438L29.1801 123.822L31.0426 120.525V130.26L32.3559 134.71L34.406 145.122V137.548L35.8982 130.26L37.1871 126.049L38.6578 134.71L40.659 138.977V130.26V126.049L43.7557 130.26V123.822L45.972 112.407L47.3391 103.407V92.4726L49.2133 98.4651V106.053L52.5797 89.7556L54.4559 82.7747L56.1181 87.9656L58.9383 89.7556V98.4651L60.7617 103.407L62.0545 123.822L63.8789 118.066L65.631 122.082L68.5479 114.229L70.299 109.729L71.8899 118.066L73.5785 123.822V130.26L74.9446 134.861L76.9243 127.87L78.352 134.71V138.977L80.0787 142.407V152.613L83.0415 142.407V130.26L86.791 123.822L89.0121 116.645V122.082L90.6059 127.87L92.3541 131.77L93.7104 123.822L95.4635 118.066L96.7553 122.082V137.548L99.7094 140.988V131.77L101.711 120.525L103.036 116.645V133.348L104.893 136.218L106.951 140.988L108.933 134.71L110.797 130.26L112.856 140.988V148.111L115.711 152.613L117.941 145.122L119.999 140.988V148.111L123.4 152.613L125.401 158.182L130.547 150.454V156.566L131.578 155.455L134.143 158.182L135.594 168.136L138.329 158.182L140.612 160.829L144.681 169.5L147.011 155.455L148.478 151.787L151.02 152.613L154.886 145.122L158 143.412L159.406 140.637L159.496 133.348L162.295 127.87V122.082L163.855 116.645V109.729L164.83 104.407L166.894 109.729L176.249 98.4651L178.254 106.169L180.77 98.4651V81.045L182.906 69.1641L184.8 56.8669L186.477 62.8428L187.848 79.7483L188.849 106.169L191.351 79.7483L193.485 75.645V98.4651L196.622 94.4523L198.623 87.4228V79.7483L200.717 75.645L202.276 81.045V89.3966L203.638 113.023L205.334 99.8037L207.164 94.4523L208.982 98.4651V102.176L211.267 107.64L212.788 81.045L214.437 66.0083L216.19 62.8428L217.941 56.8669V73.676V79.7483L220.28 75.645L222.516 66.0083V73.676H226.174V84.8662L228.566 98.4651L230.316 75.645L233.61 94.4523V104.25L236.882 102.176L239.543 113.023L241.057 98.4651L243.604 94.4523L244.975 106.169L245.975 87.4228L247.272 89.3966L250.732 84.8662L251.733 96.7549L254.644 94.4523L257.452 99.8037L259.853 91.3111L261.193 84.8662L264.162 75.645L265.808 87.4228L267.247 58.4895L269.757 66.0083L276.625 13.5146L273.33 58.4895L276.25 67.6563L282.377 20.1968L281.37 58.4895V66.0083L283.579 75.645L286.033 56.8669L287.436 73.676L290.628 77.6636L292.414 84.8662L294.214 61.3904L296.215 18.9623L300.826 0.947876L297.531 56.8669L299.973 62.8428L305.548 22.0598L299.755 114.956L301.907 105.378L304.192 112.688V94.9932L308.009 80.0829L310.003 94.9932L311.004 102.127L312.386 105.378L315.007 112.688L316.853 98.004L318.895 105.378L321.257 94.9932L324.349 100.81L325.032 80.0829L327.604 61.5733L329.308 82.3223L333.525 52.7986L334.097 52.145L334.735 55.6812L337.369 59.8108V73.676L340.743 87.9656L343.843 96.3728L348.594 82.7747L349.607 81.045L351 89.7556L352.611 96.3728L355.149 94.9932L356.688 102.176L359.396 108.784L360.684 111.757L365 95.7607V231H148.478H0.148438Z" fill="url(#paint0_linear_0_705)"></path>
                                    <path class="text-blue-600 dark:text-blue-500" d="M1 179.796L4.05663 172.195V183.933L7.20122 174.398L8.45592 183.933L10.0546 186.948V155.455L12.6353 152.613V145.122L15.3021 134.71V149.804V155.455L16.6916 160.829L18.1222 172.195V158.182L19.8001 152.613L21.4105 148.111V137.548L23.6863 142.407V126.049L25.7658 127.87V120.525L27.2755 118.066L29.1801 112.407V123.822L31.0426 120.525V130.26L32.3559 134.71L34.406 145.122V137.548L35.8982 130.26L37.1871 126.049L38.6578 134.71L40.659 138.977V130.26V126.049L43.7557 130.26V123.822L45.972 112.407L47.3391 103.407V92.4726L49.2133 98.4651V106.053L52.5797 89.7556L54.4559 82.7747L56.1181 87.9656L58.9383 89.7556V98.4651L60.7617 103.407L62.0545 123.822L63.8789 118.066L65.631 122.082L68.5479 114.229L70.299 109.729L71.8899 118.066L73.5785 123.822V130.26L74.9446 134.861L76.9243 127.87L78.352 134.71V138.977L80.0787 142.407V152.613L83.0415 142.407V130.26L86.791 123.822L89.0121 116.645V122.082L90.6059 127.87L92.3541 131.77L93.7104 123.822L95.4635 118.066L96.7553 122.082V137.548L99.7094 140.988V131.77L101.711 120.525L103.036 116.645V133.348L104.893 136.218L106.951 140.988L108.933 134.71L110.797 130.26L112.856 140.988V148.111L115.711 152.613L117.941 145.122L119.999 140.988L121.501 148.111L123.4 152.613L125.401 158.182L127.992 152.613L131.578 146.76V155.455L134.143 158.182L135.818 164.629L138.329 158.182L140.612 160.829L144.117 166.757L146.118 155.455L147.823 149.804L151.02 152.613L154.886 145.122L158.496 140.988V133.348L161.295 127.87V122.082L162.855 116.645V109.729L164.83 103.407L166.894 109.729L176.249 98.4651L178.254 106.169L180.77 98.4651V81.045L182.906 69.1641L184.8 56.8669L186.477 62.8428L187.848 79.7483L188.849 106.169L191.351 79.7483L193.485 75.645V98.4651L196.622 94.4523L198.623 87.4228V79.7483L200.717 75.645L202.276 81.045V89.3966L203.638 113.023L205.334 99.8037L207.164 94.4523L208.982 98.4651V102.176L211.267 107.64L212.788 81.045L214.437 66.0083L216.19 62.8428L217.941 56.8669V73.676V79.7483L220.28 75.645L222.516 66.0083V73.676H226.174V84.8662L228.566 98.4651L230.316 75.645L233.61 94.4523V104.25L236.882 102.176L239.543 113.023L241.057 98.4651L243.604 94.4523L244.975 106.169L245.975 87.4228L247.272 89.3966L250.732 84.8662L251.733 96.7549L254.644 94.4523L257.452 99.8037L259.853 91.3111L261.193 84.8662L264.162 75.645L265.808 87.4228L267.247 58.4895L269.757 66.0083L276.625 13.5146L273.33 58.4895L276.25 67.6563L282.377 20.1968L281.37 58.4895V66.0083L283.579 75.645L286.033 56.8669L287.436 73.676L290.628 77.6636L292.414 84.8662L294.214 61.3904L296.215 18.9623L300.826 0.947876L297.531 56.8669L299.973 62.8428L305.548 22.0598L299.755 114.956L301.907 105.378L304.192 112.688V94.9932L308.009 80.0829L310.003 94.9932L311.004 102.127L312.386 105.378L315.007 112.688L316.853 98.004L318.895 105.378L321.257 94.9932L324.349 100.81L325.032 80.0829L327.604 61.5733L329.357 74.9864L332.611 52.6565L334.352 48.5552L335.785 55.2637L338.377 59.5888V73.426L341.699 87.5181L343.843 93.4347L347.714 82.1171L350.229 78.6821L351.974 89.7556L353.323 94.9932L355.821 93.4347L357.799 102.127L360.684 108.794L363.219 98.004L365 89.7556" stroke="currentColor" stroke-width="2"></path>
                                    <defs>
                                    <linearGradient id="paint0_linear_0_705" x1="0.85108" y1="0.947876" x2="0.85108" y2="230.114" gradientUnits="userSpaceOnUse">
                                    <stop class="text-blue-500/20 dark:text-blue-500/50" stop-color="currentColor"></stop>
                                    <stop class="text-transparent" offset="1" stop-color="currentColor" stop-opacity="0.01"></stop>
                                    </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                        <div class="h-full grid sm:grid-cols-2">
                            <div class="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                                    <div class="relative aspect-square rounded-full size-12 flex border dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                                    <svg class="size-6 m-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <path stroke="currentColor" d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0zm-4.562 7.902a3 3 0 1 0 3 5.195a3 3 0 0 0-3-5.196zm15.124 0a2.999 2.999 0 1 1-2.998 5.194a2.999 2.999 0 0 1 2.998-5.194z"></path>
                                            <path fill="currentColor" fill-rule="evenodd" d="M9.003 6.125a2.993 2.993 0 0 1 .175-1.143a8.507 8.507 0 0 0-5.031 4.766a8.5 8.5 0 0 0-.502 4.817a3 3 0 0 1 .902-.723a7.498 7.498 0 0 1 4.456-7.717m5.994 0a7.499 7.499 0 0 1 4.456 7.717a2.998 2.998 0 0 1 .902.723a8.5 8.5 0 0 0-5.533-9.583a3 3 0 0 1 .175 1.143m2.536 13.328a3.002 3.002 0 0 1-1.078-.42a7.501 7.501 0 0 1-8.91 0l-.107.065a3 3 0 0 1-.971.355a8.5 8.5 0 0 0 11.066 0" clip-rule="evenodd"></path>
                                        </g>
                                    </svg>
                                    </div>
                                <div class="space-y-2">
                                    <h2 class="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">Keep your loved ones safe</h2>
                                    <p class="dark:text-gray-300 text-gray-700">Voluptate. magnam magni doloribus dolores voluptates a sapiente inventore nisi.</p>
                                </div>
                            </div>
                            <div class="mt-6 relative sm:-mr-[--card-padding] sm:-my-8 before:absolute before:w-px before:inset-0 before:mx-auto before:bg-gray-200 dark:before:bg-gray-800">
                                <div class="relative space-y-6 py-6 flex flex-col justify-center h-full">
                                    <div class="flex items-center justify-end gap-2 w-[calc(50%+0.875rem)] relative">
                                        <span class="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white">Glodie</span>
                                        <div class="size-7 ring-4 ring-white dark:ring-[--card-dark-bg]">
                                            <img class="rounded-full  border border-gray-950/5 dark:border-white/5 size-full" src="https://pbs.twimg.com/profile_images/1585976646468763648/OlbJkLL0_400x400.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2 ml-[calc(50%-1rem)] relative">
                                        <div class="size-8 ring-4 ring-white dark:ring-[--card-dark-bg]">
                                            <img class="rounded-full  border border-gray-950/5 dark:border-white/5 size-full" src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/124.jpg" alt="" />
                                        </div>
                                        <span class="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white">M. Irung</span>
                                    </div>
                                    <div class="flex items-center justify-end gap-2 w-[calc(50%+0.875rem)] relative">
                                        <span class="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white">B. Ng</span>
                                        <div class="size-7 ring-4 ring-white dark:ring-[--card-dark-bg]">
                                            <img class="rounded-full  border border-gray-950/5 dark:border-white/5 size-full" src="https://pbs.twimg.com/profile_images/1585976646468763648/OlbJkLL0_400x400.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
                :
                <p>LOGIN FIRST</p>
            }
    </>
    )
});
