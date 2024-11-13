export const routePaths = {
  publicPath: {
    home: "/home",
    auth: { path: "/auth", navigateTo: "/" },
  },
  privatePath: {
    initial: "/",
    profile: "/configuracion/perfil",
    password: "/configuracion/contraseña",
    deliveryman: "/configuracion/repartidor",
    branches: "/configuracion/local",
  },
  otherRoute: { path: "/*", navigateTo: "/" },
};
