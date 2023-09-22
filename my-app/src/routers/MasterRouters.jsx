import { useRoutes } from "react-router-dom";
import MasterAdmin from "../layouts/admin/MasterAdmin";
import MasterUsers from "../layouts/users/MasterUsers";
import AdminRouters from "./AdminRouters";
import UsersRouters from "./UsersRouters";

const MasterRouters = () => {
  const element = useRoutes([
    {
      path: "/admin",
      element: <MasterAdmin />,
      //children: AdminRouters(),
    },

    {
      path: "/",
      element: <MasterUsers />,
      //children: UsersRouters(),
    },

    /*  {
      path: "*",
      element: 'error',
    }, */
  ]);

  return element;
};

export default MasterRouters;
