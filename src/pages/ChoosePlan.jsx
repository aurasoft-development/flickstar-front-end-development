import React from 'react'
import '../assets/css/ChoosePlan.css'
import FirstPlan from '../component/plan/FirstPlan'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loginAuth } from '../features/auth/LoginSlice'

const ChoosePlan = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const data = localStorage.getItem('user_login')
    dispatch(loginAuth(data))
  }, [])
  return (
    <div className='choose_plan_container'>
      <FirstPlan />
    </div>
  )
}
export default ChoosePlan