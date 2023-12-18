
import { lazy } from "react";

const Main = lazy(()=> import("../pages/Main"));
const Emails = lazy(()=> import("../components/Emails"))
const ViewEmails = lazy(()=> import("../components/ViewEmails"))



const routes = {
    main: {
        path: "/",
        element: Main
    },
    emails: {
        path: "/emails",
        element: Emails
    },
    invalid: {
        path: "/*",
        element: Emails
    },
    view: {
        path: "/view",
        element: ViewEmails
    }
}


export {routes} ;