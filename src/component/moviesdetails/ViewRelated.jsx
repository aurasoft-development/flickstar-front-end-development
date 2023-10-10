import React from "react";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import Carousel from "react-multi-carousel";
import '../../assets/css/FlickstarDetails.css'
import { useDispatch } from "react-redux";
import { changeComponent } from "../../features/movies/movies.details";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};


const ViewRelated = ({ heading, dynamicClass, images, dynamicHeight }) => {
    const dispatch = useDispatch()
    return (
        <div className="menulist_container p-l p-r">
            <div className="menulist_wrapper ">
                <span>{heading}</span>
                <div className="menu_div_heading">
                    <span className="view_carousel_span" onClick={()=>dispatch(changeComponent(true))}>Related</span>
                    <span className="view_rel_detail" onClick={() => dispatch(changeComponent(false))} >Details</span>
                </div>
            </div>
            <Carousel
                ssr
                partialVisbile
                itemClass="image-item"
                responsive={responsive}
                infinite={true}
                className={dynamicClass}
            >
                {images.map(image => {
                    return (
                        <div className={dynamicClass}>
                            <Card >
                                <CardActionArea>
                                    <CardMedia
                                        className={dynamicHeight}
                                        component="img"
                                        image={image}
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                            </Card>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default ViewRelated;