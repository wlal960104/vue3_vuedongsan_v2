import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Detail from "@/components/Detail.vue";
import NotFound from "@/components/NotFound.vue";
import Join from "@/components/Join.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail/:id(\\d+)",
    component: Detail,
  },
  {
    path: "/join",
    component: Join,
  },
  {
    path: "/:anything(.*)", // 아무 문자 입력 가능, 엄격하게 검사하고 싶으면(.*) 추가
    component: NotFound, // 404 페이지 컴포넌트
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;