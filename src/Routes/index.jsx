import { Route, Routes } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import NotFound from '../pages/NotFound';
import Kredit from '../pages/Kredit';
import Home from '../pages/Home';

const PageRoutes = () => {
	return (
		<Routes>
			<Route element={<PageLayout />}>
				<Route index element={<Home />} />
				<Route path="/kredit" element={<Kredit />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default PageRoutes;
