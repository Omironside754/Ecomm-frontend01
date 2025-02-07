import React from "react";
import { Link } from "react-router-dom";
import { displayMoney, generateDiscountedPrice } from "../DisplayMoney/DisplayMoney"
import { addItemToCart } from "../../actions/cartAction";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    let discountPrice = generateDiscountedPrice(product.price);
    discountPrice = displayMoney(discountPrice);
    const oldPrice = displayMoney(product.price);

    const truncated =
        product.description
            .split(" ")
            .slice(0, 5)
            .join(" ") + "...";
    const nameTruncated = product.name.split(" ").slice(0, 3).join(" ") + "...";


    const addTocartHandler = (id, qty) => {
        dispatch(addItemToCart(id, qty));
        toast.success("Item added to cart!");
    }


    return (
        <div className="">

            <div className=" m-12">
                <Link
                    to={`/product/${product._id}`}
                >
                    <div class=" hover:shadow-lg aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img src={product.images[0].url} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                    </div>
                </Link>
                <div class="mt-4 flex justify-between">
                    <div>
                        <h3 className=" text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">₹{product.price}</p>

                </div>
                {/* <button
                    onClick={() => addTocartHandler(product._id, 1)}
                    className=" w-full bg-[#3A68B8] mt-2 text-white p-1 rounded-md">Add to Cart
                </button> */}
            </div>

        </div>


        // <Card style={{
        //     width: "280px",
        //     height: "FitScreen",
        //     margin: "2rem",
        //     backgroundColor: "white",
        //     currsor: "pointer",
        // }}>
        //     <Link
        //         className="productCard"
        //         to={`/product/${product._id}`}
        //         style={{ textDecoration: "none", color: "inherit" }}
        //     >
        //         <CardActionArea>
        //             <CardMedia
        //                 // style={{
        //                 //     height: "200",
        //                 //     width: "90%",
        //                 //     objectFit: "cover",
        //                 //     margin: "1rem 1rem 0 1rem"
        //                 // }}
        //                 sx={{ height: 340 }}
        //                 image={product.images[0].url}
        //                 title="preview"
        //             />
        //             <CardContent>
        //                 <Typography
        //                     gutterBottom
        //                     color="black"
        //                     fontWeight="bold"
        //                     style={{ fontWeight: "700" }}
        //                 >
        //                     {nameTruncated}
        //                 </Typography>
        //                 <Box display="flex" alignItems="center">
        //                     <Rating
        //                         name="rating"
        //                         value={product.ratings}
        //                         precision={0.1}
        //                         readOnly
        //                         size="small"
        //                         style={{ color: "#ed1c24", marginRight: 8, fontWeight: "400" }}
        //                     />
        //                     <Typography variant="body2" color="textSecondary">
        //                         ({product.numOfReviews})
        //                     </Typography>
        //                 </Box>
        //                 <Typography
        //                     variant="body2"
        //                     color="textSecondary"
        //                     component="div"
        //                     style={{
        //                         fontSize: "0.8rem",
        //                         fontWeight: "500",
        //                         marginTop: "1rem",
        //                         marginBottom: "1rem",
        //                         display: "-webkit-box",
        //                         overflow: "hidden",
        //                         textOverflow: "ellipsis",
        //                         WebkitLineClamp: 3,
        //                         WebkitBoxOrient: "vertical",
        //                     }}
        //                 >
        //                     {truncated}
        //                 </Typography>
        //                 <Box display="flex" alignItems="center">
        //                     <Typography variant="body1" style={{
        //                         textDecoration: "line-through",
        //                         fontWeight: "bold",
        //                         color: "rgba(0, 0, 0, 0.6)",
        //                         marginRight: "2rem",
        //                     }}>
        //                         {oldPrice}
        //                     </Typography>
        //                     <Typography variant="body1" style={{
        //                         fontWeight: "bold",
        //                         fontSize: "1.2rem",
        //                     }}>
        //                         {discountPrice}
        //                     </Typography>
        //                 </Box>
        //             </CardContent>
        //         </CardActionArea>
        //     </Link>
        //     <Box display="flex" justifyContent="center" p={2}>
        //         <Button
        //             variant="contained"
        //             style={{
        //                 backgroundColor: "#3A68B8",
        //                 color: "white",
        //                 borderRadius: "4",
        //                 fontWeight: "bold",
        //                 width: "100%",
        //                 height: "45",
        //                 "&:hover": {
        //                     backgroundColor: "#ed1c24",
        //                     color: "black",
        //                     fontWeight: "bold",
        //                 },
        //             }}
        //             onClick={() => addTocartHandler(product._id, 1)}
        //         >
        //             Add to Cart
        //         </Button>
        //     </Box>
        // </Card >
    );
};

export default ProductCard;
