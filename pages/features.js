import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Image from "next/image";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const pages = ["Features", "Docs", "Resources", "Events", "Blogs"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Image
                src="/logo.png"
                alt="Picture of the author"
                width={150}
                height={40}
              />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box>
              <Toolbar>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Toolbar>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

     
      <article class="center-layout">
  <div class="feature-section">
    <div class="feature-header">
      <div class="text-headline">Cross Platform</div>
      <Image src="/features/feature-icon.svg" height="70px" alt=""/>
    </div>
    <div class="feature-row">

      <div class="feature">
        <div class="feature-title">Progressive Web Apps</div>
        <p class="text-body">Use modern web platform capabilities to deliver app-like experiences.
          High performance, offline, and zero-step installation.</p>
      </div>

      <div class="feature">
        <div class="feature-title">Native</div>
        <p class="text-body">Build native mobile apps with strategies from Cordova, Ionic, or NativeScript.</p>
      </div>

      <div class="feature">
        <div class="feature-title">Desktop</div>
        <p class="text-body">Create desktop-installed apps across Mac, Windows, and Linux using the same Angular methods you've learned for the web plus the ability to access native OS APIs.</p>
      </div>
    </div>
    <hr/>
  </div>

  <div class="feature-section">
    <div class="feature-header">
      <div class="text-headline">Speed and Performance</div>
      <Image src="/features/feature-icon.svg" height="70px" alt=""/>
    </div>
    <div class="feature-row">

      <div class="feature">
        <div class="feature-title">Code Generation</div>
        <p class="text-body">Angular turns your templates into code that's highly optimized for today's JavaScript virtual machines, giving you all the benefits of handwritten code with the productivity of a framework.</p>
      </div>

      <div class="feature">
        <div class="feature-title">Universal</div>
        <p class="text-body">Serve the first view of your application on Node.js®, .NET, PHP, and other servers for near-instant rendering in just HTML and CSS. Also paves the way for sites that optimize for SEO.</p>
      </div>

      <div class="feature">
        <div class="feature-title">Code Splitting</div>
        <p class="text-body">Angular apps load quickly with the new Component Router, which delivers automatic code-splitting so users only load code required to render the view they request.</p>
      </div>
    </div>
    <hr/>
  </div>

  <div class="feature-section">
    <div class="feature-header">
      <div class="text-headline">Productivity</div>
      <Image src="/features/feature-icon.svg" height="70px" alt=""/>
    </div>
    <div class="feature-row">

      <div class="feature">
        <div class="feature-title">Templates</div>
        <p class="text-body">Quickly create UI views with simple and powerful template syntax.</p>
      </div>

      <div class="feature">
        <div class="feature-title">Angular CLI</div>
        <p class="text-body">Command line tools: start building fast, add components and tests, then instantly deploy.</p>
      </div>

      <div class="feature">
        <div class="feature-title">IDEs</div>
        <p class="text-body">Get intelligent code completion, instant errors, and other feedback in popular editors and IDEs.</p>
      </div>
    </div>
    <hr/>
  </div>

  <div class="feature-section">
    <div class="feature-header">
      <div class="text-headline">Full Development Story</div>
      <Image src="/features/feature-icon.svg" height="70px" alt=""/>
    </div>
    <div class="feature-row">

      <div class="feature">
        <div class="feature-title">Testing</div>
        <p class="text-body">With Karma for unit tests, you can know if you've broken things every time you save.</p>
      </div>

      <div class="feature">
        <div class="feature-title">Animation</div>
        <p class="text-body">Create high-performance, complex choreographies and animation timelines with very little code through Angular's intuitive API.</p>
      </div>

      <div class="feature">
        <div class="feature-title">Accessibility</div>
        <p class="text-body">Create accessible applications with ARIA-enabled components, developer guides, and built-in a11y test infrastructure.</p>
      </div>
    </div>
  </div>

  <div class="cta-bar announcement-bar">
    <a class="button" href="start">Get Started</a>
  </div>

</article>
    </div>
  );
}
export default ResponsiveAppBar;
