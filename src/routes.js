// Import Parent Compontents
import StyleGuide           from './components/style-guide/style-guide.vue';
import About                from './components/about/about.vue';
import ErrorPage            from './components/parent-templates/error_404.vue';
import Home                 from './components/home/home.vue';
// Auth Components
import AuthComponent from './components/auth/Authentication.vue';
import LoginComponent from './components/auth/Login.vue';
import RegisterComponent from './components/auth/Register.vue';
import ResetComponent from './components/auth/Reset.vue';
// Services Components
import Services from './components/services/services.vue';
import ServicesDigitalMediaManagement from './components/services/service--digital-media-management.vue';
import ServicesIndoorDigital from './components/services/service--indoor-digital.vue';
import ServiceOutdoor from './components/services/service--outdoor.vue';
// Export routes as named constant array.
// Routes consist of desired path + bound parent component
export const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '*', //404
    component: ErrorPage
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/style-guide',
    component: StyleGuide
  },
  {
    path:'/auth',
    component: AuthComponent,
    redirect: '/auth/login',
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "reset",
        component: ResetComponent
      }
    ]
  },
  {
    path: '/services',
    component: Services,
    redirect: '/services/indoor-digital-signs',
    children: [
      {
        path: "digital-media-management",
        component: ServicesDigitalMediaManagement
      },
      {
        path: "indoor-digital-signs",
        component: ServicesIndoorDigital
      },
      {
        path: "outdoor-digital-signs",
        component: ServiceOutdoor
      }
    ]
  }
];
