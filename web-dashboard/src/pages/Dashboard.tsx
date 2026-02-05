import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, AppBar, Toolbar, IconButton, Container, Grid, Paper, ListItemButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Overview from './Overview';
import BorrowerOverview from './BorrowerOverview';
import AdminOverview from './AdminOverview';
import Portfolio from './Portfolio';
import Borrowers from './Borrowers';
import Settings from './Settings';
import MyLoans from './MyLoans';
import TrustScore from './TrustScore';
import UserManagement from './UserManagement';

const drawerWidth = 240;

const Dashboard = () => {
    const navigate = useNavigate();
    const userType = localStorage.getItem('userType') || 'borrower';

    let menuItems = [];

    if (userType === 'lender') {
        menuItems = [
            { text: 'Overview', icon: <DashboardIcon />, path: '' },
            { text: 'Portfolio', icon: <AccountBalanceWalletIcon />, path: 'portfolio' },
            { text: 'Borrowers', icon: <PeopleIcon />, path: 'borrowers' },
            { text: 'Settings', icon: <SettingsIcon />, path: 'settings' },
        ];
    } else if (userType === 'admin') {
        menuItems = [
            { text: 'Overview', icon: <DashboardIcon />, path: '' },
            { text: 'User Management', icon: <SupervisorAccountIcon />, path: 'users' },
            { text: 'Risk Analysis', icon: <AssessmentIcon />, path: 'risk' }, // Reusing TrustScore or similar for now
            { text: 'Settings', icon: <SettingsIcon />, path: 'settings' },
        ];
    } else { // Borrower
        menuItems = [
            { text: 'My Dashboard', icon: <DashboardIcon />, path: '' },
            { text: 'My Loans', icon: <AccountBalanceWalletIcon />, path: 'loans' },
            { text: 'Trust Score', icon: <AssessmentIcon />, path: 'trust' },
            { text: 'Profile', icon: <SettingsIcon />, path: 'settings' },
        ];
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" sx={{ zIndex: (theme: any) => theme.zIndex.drawer + 1, bgcolor: 'white', color: 'text.primary', boxShadow: 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                        CREDIT-COLLATERAL
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography variant="body2" sx={{ mr: 2, textTransform: 'uppercase', fontWeight: 'bold', color: 'primary.main', border: '1px solid', px: 1, borderRadius: 1 }}>
                        {userType} MODE
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto', mt: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <List sx={{ flexGrow: 1 }}>
                        {menuItems.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton onClick={() => navigate(item.path)}>
                                    <ListItemIcon sx={{ color: 'primary.main' }}>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => {
                                localStorage.removeItem('token');
                                localStorage.removeItem('userType');
                                navigate('/login');
                            }}>
                                <ListItemIcon><LogoutIcon /></ListItemIcon>
                                <ListItemText primary="Logout" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: 'background.default', minHeight: '100vh' }}>
                <Toolbar />
                <Routes>
                    <Route path="/" element={
                        userType === 'lender' ? <Overview /> :
                            userType === 'admin' ? <AdminOverview /> :
                                <BorrowerOverview />
                    } />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="borrowers" element={<Borrowers />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="loans" element={<MyLoans />} />
                    <Route path="trust" element={<TrustScore />} />
                    <Route path="users" element={<UserManagement />} />
                    {/* Reuse TrustScore as Risk view for Admin for now or 404/Empty if preferred, explicitly defined to avoid issues */}
                    <Route path="risk" element={<TrustScore />} />
                </Routes>
            </Box>
        </Box>
    );
};

export default Dashboard;
