import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("credit-card-ml-project", "pages/projects/CreditCardML.tsx"),
    route("effortlogger-project", "pages/projects/Effortlogger.tsx"),
    route("extras-page", "pages/extras/extras.tsx"),
] satisfies RouteConfig;
