import Card from "./Card";

function Cards(props) {
 const userData= props.userData;

    return (
        <div className="flex flex-wrap gap-4 mb-4 mx-auto justify-center mt-20 ">
            {
            userData.map((data) =>(
             <Card key={data.id} data={data} />
            ))
        }
        </div>
        
    )
    
}

export default Cards;