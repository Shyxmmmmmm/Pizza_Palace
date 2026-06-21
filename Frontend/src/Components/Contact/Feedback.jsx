import { useState } from "react"
import axios from 'axios'
import API_URL from "../../config"
const Feedback = () => {

    const [ip1, setip1] = useState('')
    const [ip2, setip2] = useState('')
    const [rating, setRating] = useState(0)
    const [state, setstate] = useState(false)


    const func = async () => {
        setstate(true)
        try {
            const res = await axios.post(`${API_URL}/feedback`, {
                email: ip1,
                message: ip2,
                rating
            })
            if (res.data === true) {
                setTimeout(() => {
                    alert("Feedback Sent")
                    setip1("")
                    setip2("")
                    setRating("")
                    setstate(false)
                }, 2000);

            }
            else {
                setTimeout(() => {
                    alert("Failed")
                    setstate(false)
                }, 2000);

            }
        }
        catch (err) {
            setTimeout(() => {
                alert("Server Error")
                setstate(false)
            }, 2000);
            console.log(err)

        }

    }

    return (
        <div className="shadow-2xl flex justify-between items-center lg:mx-10 md:mx-5 mx-3 p-4 bg-white">
            <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
                <h2 className="title-font mb-1 text-lg font-medium text-gray-900">Feedback</h2>
                <p className="mb-5 leading-relaxed text-gray-600">If you had any issues or you liked our product, please share
                    with us!
                </p>
                <div className="mb-4">
                    <label for="email" className="text-sm leading-7 text-gray-600">Email</label>
                    <input value={ip1} onChange={(e) => { setip1(e.target.value) }} type="email" id="email" name="email" className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
                </div>
                <div className="mb-4">
                    <label for="message" className="text-sm leading-7 text-gray-600">Message</label>
                    <textarea value={ip2} onChange={(e) => { setip2(e.target.value) }} id="message" name="message" className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
                </div>

                <div className="mb-4">

                    <label className="text-sm leading-7 text-gray-600">
                        Rating
                    </label>

                    <div className="flex gap-2 mt-2">

                        {
                            [1, 2, 3, 4, 5].map((star) => (

                                <i
                                    key={star}
                                    onClick={() => setRating(star)}
                                    className={`fa-solid fa-star cursor-pointer text-2xl ${star <= rating
                                            ? "text-yellow-400"
                                            : "text-gray-300"
                                        }`}
                                ></i>

                            ))
                        }

                    </div>

                </div>

                <button onClick={func} disabled={state} className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">{state ? "Sending" : "Send"}</button>
                <p className="mt-3 text-xs text-gray-500">Feel free to connect with us on social media platforms.</p>
            </div>
        </div>
    )
}
export default Feedback