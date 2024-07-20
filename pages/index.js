import Header from "@/components/Header";
import Featured from "@/components/Featured";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import { WishedProduct } from "@/models/WishedProduct";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Setting } from "@/models/Setting";

import HeroSlider from "@/components/HeroSlider";
import FeaturedSlider from "@/components/FeaturedSlider";
// import '../styles/style.scss';
export default function HomePage({ featuredProduct, newProducts, wishedNewProducts }) {
  return (
    <div>
      <Header />
      <HeroSlider/>
      <FeaturedSlider/>
      {/* <Featured product={featuredProduct} /> */}
     
      <NewProducts products={newProducts} wishedProducts={wishedNewProducts} />
     
    </div>
  );
}

export async function getServerSideProps(ctx) {
  await mongooseConnect();

  const featuredProductSetting = await Setting.findOne({ name: 'featuredProductId' });

  if (!featuredProductSetting) {
    console.error('No setting found with the name "featuredProductId".');
    return {
      notFound: true,
    };
  }

  const featuredProductId = featuredProductSetting.value;
  const featuredProduct = await Product.findById(featuredProductId);

  if (!featuredProduct) {
    console.error(`No product found with ID "${featuredProductId}".`);
    return {
      notFound: true,
    };
  }

  const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 10 });

  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  const wishedNewProducts = session?.user
    ? await WishedProduct.find({
        userEmail: session.user.email,
        product: newProducts.map((p) => p._id.toString()),
      })
    : [];

  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      wishedNewProducts: wishedNewProducts.map((i) => i.product.toString()),
    },
  };
}
