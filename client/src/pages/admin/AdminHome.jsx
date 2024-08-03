import React from 'react'
import Layout from '../../components/Shared/Layout/Layout'
import { useSelector } from 'react-redux'

const AdminHome = () => {
    const { user } = useSelector(state => state.auth)
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
            <h1>Welcome Admin <i className='text-success'>{user?.name}</i></h1>
            <h3>Manage Blood Bank App</h3>
            <hr/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque recusandae eligendi, maiores doloribus similique officia dicta accusamus minus, distinctio nobis, quaerat ipsam? Corrupti ea, at nobis saepe, ratione illum odit, distinctio quibusdam voluptas accusantium fugiat inventore. Necessitatibus numquam voluptatibus ducimus voluptatum, unde quasi dolorum, aspernatur quidem dicta enim repellat quis pariatur accusamus, minus reprehenderit quia praesentium veniam earum assumenda corrupti. Fugit impedit dolorem voluptatem perspiciatis error unde quibusdam ex. Non saepe repudiandae cum nisi necessitatibus eum voluptates magni ad eos consectetur! Hic ea perferendis beatae aperiam nihil. Placeat quod cumque necessitatibus animi corporis eum unde hic voluptates sapiente atque dolore dolor optio ad sit iste, deleniti impedit inventore ut nihil molestiae dicta voluptas aliquam odit. Recusandae enim illo dolorum autem, numquam rem debitis quia hic doloremque esse, sapiente odit, alias blanditiis non sequi tenetur id placeat. Minima nobis nihil quae possimus asperiores quos, explicabo reprehenderit nam iste. Quidem nihil consequatur quia? Repellat eligendi saepe nisi mollitia autem, atque ab accusamus doloremque fugit perspiciatis natus eos illum sapiente ad ipsam illo culpa, iure sit cumque, sint nam deserunt dolor repudiandae esse! Eos hic dolor voluptatibus? Asperiores dolorem mollitia a quidem. Cum ea accusamus voluptates tempore tenetur dolores nulla ducimus, iusto inventore eaque officia officiis porro modi. Voluptatibus porro impedit quae distinctio ea. Deleniti ut maxime similique provident facilis distinctio quis, iure dolores ullam beatae ratione veritatis unde quia voluptates, natus, impedit ex necessitatibus veniam est. Deserunt excepturi possimus modi blanditiis doloribus provident doloremque sit. Sed magni maxime ad beatae labore possimus similique dolorum earum. Odio eos, similique sit, omnis dolor reiciendis odit libero temporibus praesentium consequatur rerum architecto, voluptates aspernatur harum excepturi. Ut vitae amet commodi molestiae mollitia corrupti dolorum deleniti qui incidunt repudiandae. Sapiente natus minima sit quo omnis, magni et? Quibusdam reiciendis, ipsam perspiciatis odio quam, et maiores animi dolorem id laudantium sint, illum ipsum velit magni vero sed alias excepturi at porro necessitatibus optio dignissimos molestiae voluptas? Dolorum eaque impedit porro explicabo quaerat repellat delectus hic nemo. Deleniti fugit voluptate dolores esse totam perferendis ipsum, cum cumque minus officia earum numquam quaerat! Incidunt harum id molestias blanditiis enim rem est delectus deserunt minus aspernatur distinctio voluptatum totam, modi, animi veritatis eum unde commodi fugit. Ab error esse saepe veritatis a voluptas magnam aliquam sit ratione ad, animi soluta optio minus voluptatem, eveniet sunt? A autem error maxime expedita quidem! Eveniet nostrum vero id ut quam labore optio consequatur?</p>
        </div>
      </div>
    </Layout>
  )
}

export default AdminHome
