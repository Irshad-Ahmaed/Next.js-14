
const reviews = ({params}: {params: {ProductId: string};}) => {
    return (
      <div>Reviews of Product {params.ProductId}</div>
    )
  }
  
  export default reviews;