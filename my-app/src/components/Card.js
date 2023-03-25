
function Card(props) {
   const data = props.data;
    return (
        <div className="w-[400px] rounded overflow-hidden shadow-lg bg-white opacity-1 flex gap-4">
             <div>
            <img 
            className="w-[full]"
            src={data.avatar}
               />
            </div>

           
            <div className="text-black font-semibold text-lg leading-6">
                <p>{data.first_name} {data.last_name}</p>
                <p>{data.email}</p>
            </div>
           
        </div>
    )


}

export default Card;