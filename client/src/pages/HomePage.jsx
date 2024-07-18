import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../components/Shared/Spinner'
import Layout from '../components/Shared/Layout/Layout'
import Modal from '../components/Shared/modal/modal'
const HomePage = () => {
  const {loading, error} = useSelector(state => state.auth)
  return (
    <Layout>
    {error && <span>{alert(error)}</span>}
    {loading ? (<Spinner />) : (
      <>
        
          <h4 className='mx-4 my-4' data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{cursor:'pointer'}}>
            <i className='fa-solid fa-plus text-success py-4'></i>
            Add Inventory</h4>

        <Modal />
      </>
    )}
    </Layout>
  )
}

export default HomePage
