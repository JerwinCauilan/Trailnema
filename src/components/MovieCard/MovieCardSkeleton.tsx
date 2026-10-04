import {
    Card,
    CardActionArea,
    CardContent,
    Skeleton,
    Stack,
} from "@mui/material";
import { getRandInt } from "../../utils/util";

const MovieCardSkeleton = () => {
    return (
        <Card variant="outlined">
            <CardActionArea sx={{ p: 1 }}>
                <Skeleton
                    variant="rounded"
                    animation="wave"
                    height={250}
                    sx={{ borderRadius: ".2rem" }}
                />
                <CardContent sx={{ px: 0, pb: 0 }}>
                    <Skeleton
                        variant="text"
                        animation="wave"
                        width={getRandInt(75, 150)}
                        height={20}
                    />

                    <Stack direction="row" alignItems="center" gap={1}>
                        <Skeleton
                            variant="rounded"
                            animation="wave"
                            width={16}
                            height={16}
                        />

                        <Skeleton
                            variant="text"
                            animation="wave"
                            width={35}
                            height={20}
                        />
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default MovieCardSkeleton;
