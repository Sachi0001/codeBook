

export const Rating = ({rating}) => {

const ratingStar = Array(5).fill(false);

for(let i=0; i<rating; i++){
ratingStar[i] = true;


}


  return (
    <div>

{ratingStar.map((value, index)=>(

value ? (<i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>) : ( <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>)

))}

    </div>
  )
}
