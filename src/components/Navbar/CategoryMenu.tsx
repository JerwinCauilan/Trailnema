import { Box, Button, Menu, MenuItem } from "@mui/material";
import { ListFilter } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { MOVIE_CATEGORIES } from "../../utils/constant";

const CategoryMenu = ({ currentPath }: { currentPath?: string }) => {
    const navigate = useNavigate();
    const [anchor, setAnchor] = useState<HTMLElement | null>(null);

    const handleSelect = (path: string, title: string) => {
        setAnchor(null);
        void navigate(`/movies/list/${path}`, { state: { title } });
    };

    return (
        <>
            <Button
                color="primary"
                variant="outlined"
                size="small"
                startIcon={<ListFilter size={18} />}
                onClick={(e) => setAnchor(e.currentTarget)}
                sx={{ textTransform: "none", flexShrink: 0, minWidth: 0 }}
            >
                <Box
                    component="span"
                    sx={{ display: { xs: "none", sm: "inline" } }}
                >
                    Switch Category
                </Box>
            </Button>
            <Menu
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={() => setAnchor(null)}
            >
                {MOVIE_CATEGORIES.map(({ path, title }) => (
                    <MenuItem
                        key={path}
                        selected={path === currentPath}
                        onClick={() => handleSelect(path, title)}
                    >
                        {title}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default CategoryMenu;
