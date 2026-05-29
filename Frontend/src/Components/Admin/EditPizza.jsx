import { useState } from 'react'
import axios from 'axios'

const EditPizza = () => {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [status, setstatus] = useState(false)

    const update = async () => {

        const data = await axios.put(

            `http://localhost:3000/updatePizza/${id}`,

            {
                id,
                name,
                price,
                category
            }

        )
        if (data.data === true) {
            setstatus(true)
            setTimeout(() => {
                alert("Pizza Updated Successfully")
                setId('')
                setName("")
                setPrice("")
                setCategory("")
            }, 2000);
            
        }
        else {
            setTimeout(() => {
                alert("Update Failed")
                setstatus(false)
            }, 2000);
            
        }
    }

    return (

        <div className='p-5 bg-gray-100 min-h-screen'>

            <div className='bg-white p-5 rounded-xl shadow lg:w-[50%] mx-auto'>

                <h1 className='text-3xl font-bold mb-6'>
                    Edit Pizza
                </h1>

                <div className='flex flex-col gap-5'>

                    <input
                        type='text'
                        placeholder='Pizza Id'
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        className='border p-3 rounded'
                    />

                    <input
                        type='text'
                        placeholder='Pizza Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='border p-3 rounded'
                    />

                    <input
                        type='number'
                        placeholder='Price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className='border p-3 rounded'
                    />

                    <input
                        type='text'
                        placeholder='Category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className='border p-3 rounded'
                    />

                    <button
                        onClick={update}
                        className='bg-orange-500 text-white p-3 rounded hover:bg-orange-600'>

                        {status?"Updating":"Update Pizza"}

                    </button>

                </div>

            </div>

        </div>

    )

}

export default EditPizza