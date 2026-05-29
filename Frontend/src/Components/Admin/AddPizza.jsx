import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import API_URL from "../../config"
const AddPizza = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState("")
    const [status, setstatus] = useState(false)

    const submit = async () => {
        try {
            setstatus(true)
            await axios.post(`${API_URL}/AddPizza`, {
                name,
                price,
                category,
                image
            })

            setTimeout(() => {
                alert("Pizza Added Successfully")
                navigate('/Menu')
            }, 2000);

        }

        catch (err) {
            setTimeout(() => {
                alert("Error")
                setstatus(false)
            }, 2000);

        }

    }

    return (

        <div className='p-5 bg-gray-100 min-h-screen'>

            <div className='bg-white p-5 rounded-xl shadow lg:w-[50%] mx-auto'>

                <h1 className='text-3xl font-bold mb-6'>Add New Pizza</h1>

                <div className='flex flex-col gap-5'>

                    <input type='text' placeholder='Pizza Name' value={name} onChange={(e) => setName(e.target.value)} className='border p-3 rounded' />

                    <input type='number' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} className='border p-3 rounded' />

                    <input type='text' placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)} className='border p-3 rounded' />
                    <input type='text' placeholder='Image URL' value={image} onChange={(e) => setImage(e.target.value)} className='border p-3 rounded' />

                    <button onClick={submit} disabled={status} className='bg-orange-500 text-white p-3 rounded hover:bg-orange-600'>
                        {status ? "Adding Pizza" : "Add Pizza"}
                    </button>

                </div>

            </div>

        </div>

    )
}

export default AddPizza