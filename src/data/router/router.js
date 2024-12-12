export const routePaths = {
  initialPath: "/",
  publicPath: {
    home: "/home",
    auth: { path: "/auth", navigateTo: "/" },
  },
  privatePath: {
    map: "/map",
    profile: "/configuracion/perfil",
    password: "/configuracion/contraseña",
    deliveryman: "/configuracion/repartidor",
    branches: "/configuracion/local",
  },
  otherRoute: { path: "/*", navigateTo: "/" },
};

export const protectedRouteData = {
  path: "/home",
};
