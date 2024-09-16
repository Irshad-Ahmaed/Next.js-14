import {notFound} from "next/navigation";

const reviewById = ({ params }: {params: {ProductId: string, reviewsId: string};}) => {
    if(parseInt(params.reviewsId)>1000){
        notFound();
    }
    return (
      <div>Review {params.reviewsId} of Product {params.ProductId}</div>
    )
  }
  
  export default reviewById;