import { Box, Button, Typography } from "@mui/material";

type ErrorStateProps = {
    message?: string;
    onRetry?: () => void;
    imageSize?: number;
};

const ErrorState = ({
    message = "Something went wrong.",
    onRetry,
    imageSize = 200,
}: ErrorStateProps) => (
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 1.5,
            py: 4,
        }}
    >
        <Box
            component="img"
            // src={}
            sx={{
                width: imageSize,
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
            }}
        />
        <Typography color="error" sx={{ mb: 1 }}>
            {message}
        </Typography>
        {onRetry && (
            <Button size="small" variant="outlined" onClick={onRetry}>
                Try again
            </Button>
        )}
    </Box>
);

export default ErrorState;
