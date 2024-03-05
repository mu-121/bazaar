import React from 'react';
import { AdminNavbar } from '../../components/admincomponents/AdminNavbar';
import { SideBar } from '../../components/admincomponents/SideBar';
import { Pagecontent } from '../../components/admincomponents/Pagecontent';

export const AdminDashboard = () => {
	return (
		<>
			<AdminNavbar />
			<SideBar />
			<Pagecontent />
		</>
	);
};
