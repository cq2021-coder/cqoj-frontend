<template>
  <a-row id="globalHeader" align="center" :wrap="false">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img alt="logo" class="logo" src="../assets/logo.svg" />
            <div class="title">程崎 OJ</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in visibleRoutes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>
        {{ userName }}
      </div>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { checkAccess } from "@/access/checkAccess";

const router = useRouter();
const store = useStore();
const selectedKeys = ref(["/"]);

const userName = computed(
  () => store.state.user?.loginUser?.userName ?? "未登录"
);

const visibleRoutes = computed(() =>
  routes.filter((item) => {
    if (item.meta?.hiddenInMenu) {
      return false;
    }
    return checkAccess(
      store.state.user?.loginUser,
      item.meta?.access as string
    );
  })
);

router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
  console.log(from, failure);
});
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: #444;
  margin-right: 16px;
}

.logo {
  height: 48px;
}
</style>
