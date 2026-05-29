import { useState } from "react"

const Services = () => {
    const [ip, setIp] = useState([
        {
            img: <i className="fa-solid fa-truck-fast" style={{ color: "rgb(209, 18, 12)" }}></i>,
            ip1: "Fast Delivery",
            ip2: "30 to 40 min",
        },
        {
            img: <i className="fa-solid fa-ranking-star" style={{ color: "rgb(209, 18, 12)" }}></i>,
            ip1: "Best Quality",
            ip2: "100% Fresh",
        },
        {
            img: <i className="fa-solid fa-credit-card" style={{ color: "rgb(209, 18, 12)" }}></i>,
            ip1: "Easy Payment",
            ip2: "Cash / Online",
        },
        {
            img: <i className="fa-solid fa-arrow-rotate-left" style={{ color: "rgb(209, 18, 12)" }}></i>,
            ip1: "Easy Return",
            ip2: "Hassle Free",
        },
    ])
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5" >
            {
                ip.map((item, index) => {
                    return (
                        <div key={index} className="shadow-2xl m-5 p-5 rounded text-center">
                            <div className="text-3xl mb-3">{item.img}</div>
                            <h1 className="font-bold">{item.ip1}</h1>
                            <p>{item.ip2}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Services