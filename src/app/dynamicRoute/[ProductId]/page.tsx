import { Metadata } from "next";

type Props = {
  params:{
    ProductId: string;
  };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => resolve(`iPhone ${params.ProductId}`), 100);
  });

  return {
    title: `Product ${title}`,
  };
};

const ProductBYAnyID = ({ params }: Props) => {
  return(
    <h1>Details about the Product {params.ProductId}</h1>
  )
}
export default ProductBYAnyID