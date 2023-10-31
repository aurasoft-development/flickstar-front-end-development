import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from '../layout/MainLayout';
import Login from '../component/auth/Login';
import Register from '../component/auth/Signup';
import Forgot from '../component/auth/Forgot';
import Otp from '../component/auth/Otp';
import Reset from '../component/auth/Reset';
import ChoosePlan from '../pages/ChoosePlan';
import MoviesDetails from '../pages/MoviesDetails';
import Movies from '../pages/Movies';
import SecondPlan from '../component/plan/SecondPlan';
import HeaderNav from '../pages/HeaderNav';
import Kids from '../pages/Kids';
import ManageProfile from '../component/profile/ManageProfile';
import EditManageProfile from '../component/profile/EditManageProfile';
import ProfileEdit from '../component/profile/ProfileEdit';
import Watch from '../pages/Watch';
import VideoPlayer from '../component/videoplayer/VideoPlayer';

const AllRoutes = () => {
    return (
        <>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/forgot_password' element={<Forgot />} />
                    <Route path='/otp_verify' element={<Otp />} />
                    <Route path='/reset_password' element={<Reset />} />
                    <Route path='/choose_plan' element={<ChoosePlan />} />
                    <Route path='/plan' element={<SecondPlan />} />
                    <Route path='/movies' element={<Movies />} />
                    <Route path='/movies_details' element={<MoviesDetails />} />
                    <Route path='/header_nav' element={<HeaderNav />} />
                    <Route path='/kids' element={<Kids />} />
                    <Route path='/manage_profile' element={<ManageProfile />} />
                    <Route path='/edit_manage_profile' element={<EditManageProfile />} />
                    <Route path='/profile_edit' element={<ProfileEdit />} />
                    <Route path='/watch' element={<Watch />} />
                    <Route path='/video_player' element={<VideoPlayer />} />

                </Routes>
            </MainLayout>
        </>
    )
}
export default AllRoutes;