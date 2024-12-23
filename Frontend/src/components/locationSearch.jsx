import { ImLocation2 } from "react-icons/im";

export default function LocationSearch(props) {
    //sample location 
    // console.log(props);
    const location = [
        "Hall3, NIT Durgapur, A zone, Durgapur, West Bengal",
        "Bhushila Balurghat Dakshin Dinajpur West Bengal",
        "Durgapur Station, Durgapur, West Bengal",
        "Balurghat Railway Station,Balurghat, Dakshin Dinajpur, West Bengal",
    ]

    return (
        <div>
            {
                location.map((loc,idx)=>{
                    return(
                        <div key={idx} onClick={()=>{
                            // console.log(props);
                             props.setVehicalPanel(true);
                             props.setpanelOpen(false);
                            // props.setVehiclePanel(true);
                        }} className="flex gap-4 p-3 border-gray-300 active:border-black border-2 rounded-xl items-center my-2  justify-start ml-3">
                        <h3 className="h-10 w-10 bg-slate-200 flex items-center justify-center rounded-full">
                            <ImLocation2/>
                        </h3>
                        <p className="font-medium text-base">{loc}</p>
                      </div>   
                    )
                })
            }   
        </div>
    )
}