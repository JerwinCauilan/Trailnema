import { Box, Button, Typography } from "@mui/material";

type ErrorStateProps = {
    message?: string;
    onRetry?: () => void;
};

const ErrorState = ({
    message = "Something went wrong.",
    onRetry,
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
