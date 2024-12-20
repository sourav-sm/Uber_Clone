import { Link } from "react-router-dom"

export default function Home() {  
    return (
        <div>
            <div className="bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  h-screen pt-8 w-full flex flex-col justify-between ">
                <img className="w-16 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />
               <div className="bg-white py-4 px-4 pb-7">
                   <div className="text-3xl font-semibold px-2">Get Started With Uber</div>
                   <Link to="/login" className="flex items-center justify-center bg-black text-white py-3 rounded mt-4 w-full text-2xl">Continue</Link>
               </div>
            </div>
        </div>
    )
}