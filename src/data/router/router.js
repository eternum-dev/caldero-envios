export const routePaths = {
  initialPath: "/",
  publicPath: {
    home: "/home",
    auth: { path: "/auth", navigateTo: "/" },
  },
  privatePath: {
    wizard: "/wizard",
    map: "/map",
    profile: "/configuracion/perfil",
    password: "/configuracion/contraseña",
    deliveryman: "/configuracion/repartidor",
    branches: "/configuracion/local",
  },
  otherRoute: { path: "/*", navigateTo: "/" },
};

export const protectedRouteData = {
  homePath: "/home",
  mapPath: "/map",
  wizardPath: "/wizard",
};
