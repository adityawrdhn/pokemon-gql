import React from "react"
import Icon from "react-icons-kit"
import { search } from "react-icons-kit/feather"
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core"
import { fade, makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("md")]: {
            marginLeft: "auto",
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "20ch",
            "&:focus": {
                width: "40ch",
            },
        },
    },
}))
const Header = ({ onChange, keywords }) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h4" noWrap>
                        Pokemon GraphQL
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Icon icon={search} size={16} />
                        </div>
                        <InputBase
                            placeholder="search name, types, classification"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{
                                "aria-label": "search",
                            }}
                            type="search"
                            onChange={onChange}
                            value={keywords}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <Box height={64}/>
        </div>
    )
}
export default Header