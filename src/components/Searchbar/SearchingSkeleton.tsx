import { Box, Skeleton, Stack } from "@mui/material";

const SearchingSkeleton = () => {
    return (
        <Stack gap={1} p={1.5}>
            {[0, 1, 2, 3].map((i) => (
                <Stack key={i} direction="row" gap={1.5}>
                    <Skeleton variant="rounded" width={46} height={68} />
                    <Box sx={{ flex: 1 }}>
                        <Skeleton width="70%" />
                        <Skeleton width="40%" />
                    </Box>
                </Stack>
            ))}
        </Stack>
    );
};

export default SearchingSkeleton;
