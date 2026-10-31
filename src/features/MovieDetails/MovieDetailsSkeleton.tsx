import { Box, Skeleton, Stack } from "@mui/material";

// Skeleton background color
const sx = { bgcolor: "rgba(255, 255, 255, 0.1)" };

const MovieDetailsSkeleton = () => (
    <Box
        sx={{
            position: "relative",
            zIndex: 1,
            width: { xs: "95%", sm: "90%", md: "85%" },
            flex: 1,
            mx: "auto",
            pt: { xs: 6, sm: 10, md: 15 },
            pb: 4,
            display: "flex",
            flexDirection: "column",
        }}
    >
        <Stack
            direction={{ xs: "column", md: "row" }}
            gap={{ xs: 3, md: 5 }}
            alignItems={{ xs: "center", md: "flex-end" }}
        >
            {/* Poster */}
            <Skeleton
                variant="rounded"
                animation="wave"
                sx={{
                    ...sx,
                    width: { xs: 180, sm: 220, md: 280, lg: 320 },
                    height: "auto",
                    aspectRatio: "3 / 4",
                    flexShrink: 0,
                }}
            />

            <Box sx={{ width: "100%", maxWidth: 900 }}>
                {/* Title */}
                <Skeleton
                    animation="wave"
                    sx={{ ...sx, fontSize: { xs: "1.8rem", md: "3.5rem" } }}
                    width="60%"
                />
                {/* Tagline */}
                <Skeleton animation="wave" sx={{ ...sx, mb: 2 }} width="35%" />

                {/* Overview */}
                <Skeleton animation="wave" sx={sx} width="100%" />
                <Skeleton animation="wave" sx={sx} width="95%" />
                <Skeleton animation="wave" sx={sx} width="80%" />
                <Skeleton animation="wave" sx={{ ...sx, mb: 2 }} width="50%" />

                {/* Genre chips */}
                <Stack direction="row" gap={0.5} mb={2}>
                    {[70, 90, 60].map((w) => (
                        <Skeleton
                            key={w}
                            variant="rounded"
                            animation="wave"
                            sx={sx}
                            width={w}
                            height={24}
                        />
                    ))}
                </Stack>

                {/* Rating, language, release date */}
                <Skeleton animation="wave" sx={sx} width={120} />
                <Skeleton animation="wave" sx={sx} width={180} />
                <Skeleton animation="wave" sx={sx} width={160} />
            </Box>
        </Stack>
    </Box>
);

export default MovieDetailsSkeleton;
