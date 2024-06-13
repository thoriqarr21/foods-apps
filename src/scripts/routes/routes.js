import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import Daerah from '../views/pages/daerah';
import DetailDaerah from '../views/pages/detail-daerah';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/daerah': Daerah,
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/detail-daerah/:id': DetailDaerah,
};

export default routes;
