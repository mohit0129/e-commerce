import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import { getFeatureImages } from "@/store/common-slice";
import { FaShoePrints, FaStore, FaShoppingBag, FaMoon, FaSun } from "react-icons/fa";
import { GiClothes, GiRunningShoe, GiShoppingBag, GiClothesline } from "react-icons/gi";
import { FiWatch } from "react-icons/fi";
import { SlUser, SlUserFemale } from "react-icons/sl";
import { PiBaby, PiWatch, PiPants } from "react-icons/pi";
import { TbShoe } from "react-icons/tb";
import { motion } from "framer-motion";

const categoriesWithIcon = [
  { id: "men", label: "Men", icon: SlUser },
  { id: "women", label: "Women", icon: SlUserFemale },
  { id: "kids", label: "Kids", icon: PiBaby },
  { id: "accessories", label: "Accessories", icon: PiWatch },
  { id: "footwear", label: "Footwear", icon: TbShoe },
];

const brandsWithIcon = [
  { id: "nike", label: "Nike", icon: GiRunningShoe },
  { id: "adidas", label: "Adidas", icon: GiClothes },
  { id: "puma", label: "Puma", icon: GiShoppingBag },
  { id: "levi", label: "Levi's", icon: PiPants },
  { id: "zara", label: "Zara", icon: FaStore },
  { id: "h&m", label: "H&M", icon: FaShoppingBag },
];

function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList } = useSelector((state) => state.shopProducts);
  const { featureImageList } = useSelector((state) => state.commonFeature);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleProductClick(productId) {
    navigate(`/shop/product/${productId}`);
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  console.log(productList, "productList");

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[85vh] overflow-hidden">
        {featureImageList && featureImageList.length > 0
          ? featureImageList.map((slide, index) => (
              <div
                key={index}
                className={`${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                } absolute inset-0 transition-opacity duration-1000`}
              >
                <img
                  src={slide?.image}
                  className="w-full h-full object-cover"
                  alt="Hero banner"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent">
                  <div className="container mx-auto px-4 h-full flex items-center">
                    <div className="max-w-2xl text-white">
                      <h1 className="text-6xl font-bold mb-6 leading-tight">
                        Discover Your Style
                      </h1>
                      <p className="text-xl mb-8 text-gray-200">
                        Explore our latest collection of premium fashion items
                      </p>
                      <Button 
                        size="lg" 
                        className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
                        onClick={() => handleNavigateToListingPage("all", "category")}
                      >
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) =>
                (prevSlide - 1 + featureImageList.length) %
                featureImageList.length
            )
          }
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full w-12 h-12"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide + 1) % featureImageList.length
            )
          }
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full w-12 h-12"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </Button>
      </div>

      {/* Categories Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {categoriesWithIcon.map((categoryItem) => (
              <Card
                key={categoryItem.id}
                onClick={() => handleNavigateToListingPage(categoryItem, "category")}
                className="cursor-pointer group hover:shadow-2xl transition-all duration-300 border-0 bg-white rounded-2xl overflow-hidden"
              >
                <CardContent className="flex flex-col items-center justify-center p-8">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <categoryItem.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="font-semibold text-xl group-hover:text-primary transition-colors">
                    {categoryItem.label}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brandsWithIcon.map((brandItem) => (
              <Card
                key={brandItem.id}
                onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                className="cursor-pointer group hover:shadow-2xl transition-all duration-300 border-0 bg-white rounded-2xl overflow-hidden"
              >
                <CardContent className="flex flex-col items-center justify-center p-8">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-all duration-300 group-hover:scale-110">
                    <brandItem.icon className="w-10 h-10 text-gray-600" />
                  </div>
                  <span className="font-semibold text-xl group-hover:text-primary transition-colors">
                    {brandItem.label}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Discover our handpicked selection of premium items</p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                  <motion.div
                    key={productItem.id}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.03,
                      transition: { duration: 0.2 }
                    }}
                    className="group cursor-pointer"
                    onClick={() => handleProductClick(productItem.id)}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-300 group-hover:shadow-xl">
                      <ShoppingProductTile
                        product={productItem}
                        handleAddtoCart={handleAddtoCart}
                      />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))
              : null}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-600 text-center">
              © {new Date().getFullYear()}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Designed and developed by Mohit
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ShoppingHome;
