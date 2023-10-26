import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import React from 'react'
import { KeyboardArrowRight } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import '../../assets/css/Movies.css'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";


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


const WatchList = ({ heading, dynamicClass, images, dynamicHeight }) => {
    const navigate = useNavigate()
    const { t } = useTranslation()
    return (
        <div className="menulist_container p-l">
            <div className="menulist_wrapper font-18 p-r">
                <span>{heading}</span>
                <div className="menu_div_heading">
                    <span className="menu_color">{t('WATCHLIST_SEE_ALL')}</span>
                    <KeyboardArrowRight />
                </div>
            </div>
            <Carousel
                ssr
                partialVisbile
                itemClass="image-item"
                responsive={responsive}
                infinite={true}
                className={`${dynamicClass} card`}
            >
                {images.map((image, index) => {
                    return (
                        <div key={index} className={`${dynamicClass} `}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia

                                        className={dynamicHeight}
                                        component="img"
                                        image={image}
                                        alt="green iguana"
                                        onClick={() => navigate('/movies_details')}
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

export default WatchList;