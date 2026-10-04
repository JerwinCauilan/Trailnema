import { Box, Skeleton, Stack } from "@mui/material";
import { getRandInt } from "../../utils/util";

const HomeSliderSkeleton = () => (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        <Skeleton
            variant="rectangular"
            animation="wave"
            width="100%"
            height="100%"
        />

        <Stack
            gap={2}
            sx={{
                position: "absolute",
                top: "50%",
                left: { xs: 24, md: 80 },
                transform: "translateY(-50%)",
                width: "min(400px, 80%)",
            }}
        >
            <Skeleton
                variant="text"
                sx={{ fontSize: "3rem" }}
                width={getRandInt(250, 400)}
            />
            <Box>
                <Skeleton variant="text" width={getRandInt(250, 350)} />
                <Skeleton variant="text" width={getRandInt(150, 300)} />
                <Skeleton variant="text" width={getRandInt(100, 200)} />
            </Box>
            <Skeleton variant="text" width={80} />
            <Skeleton variant="rounded" width={140} height={28} />
        </Stack>
    </Box>
);

export default HomeSliderSkeleton;
