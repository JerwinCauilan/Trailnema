import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router';
import { IMAGEPATH } from '../utils/constant';
import { MovieCardType } from '../utils/type';

type MovieCardProps = {
    movie?: MovieCardType,
    isLoading?: boolean
}

const CustomCard = ({ movie, isLoading }: Readonly<MovieCardProps>) => {

    return (
        <Link to={isLoading ? '' : `/movies/details/${movie?.id}`}>
            <Card 
                sx={{ 
                    width: 135, 
                    position: "relative", 
                    overflow: "hidden", 
                    border: "none", 
                    backgroundColor: isLoading ? undefined : "transparent",
                }}
            >
                {isLoading ? (
                    <Skeleton width={135} height={200} animation="wave" variant="rectangular" sx={{ backgroundColor: "#ced4da" }} />
                ) : (
                    <CardMedia
                        component="img"
                        sx={{ 
                            width: "100%", 
                            height: "100%", 
                            objectFit: "cover", 
                            color: "#fff",
                            transition: "transform 0.3s ease",
                            "&:hover": {
                                transform: "scale(1.07)"
                            }, 
                        }}
                        image={`${IMAGEPATH}${movie?.poster_path}`}
                        alt={`${movie?.title}`}
                    />
                )}
                <Box sx={{ position: "absolute", bottom: "-24px", width: "100%", height: "30%", background: "linear-gradient(to bottom, rgba(0,0,0,0), rgb(0,0,0))" }}></Box>
            </Card>
        </Link>
    )
}

export default CustomCard
