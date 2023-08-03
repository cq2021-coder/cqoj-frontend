<template>
  <a-card title="用户基本信息" hoverable :style="{ width: '30%' }">
    <a-descriptions
      style="margin-top: 20px"
      :data="data"
      size="large"
      column="1"
      bordered
    />
    <template #extra>
      <a-link @click="openEditDrawer">修改用户信息</a-link>
    </template>
  </a-card>
  <a-drawer
    width="30%"
    :visible="visible"
    placement="right"
    @ok="handleOk"
    @cancel="closeEditDrawer"
    unmountOnClose
  >
    <div style="text-align: center; margin-bottom: 20px">
      <a-upload
        action="/"
        :fileList="file ? [file] : []"
        :show-file-list="false"
        @change="onChange"
        @progress="onProgress"
      >
        <template #upload-button>
          <div
            :class="`arco-upload-list-item${
              file && file.status === 'error'
                ? ' arco-upload-list-item-error'
                : ''
            }`"
          >
            <div
              class="arco-upload-list-picture custom-upload-avatar"
              v-if="updateForm.userAvatar"
            >
              <a-avatar :size="70" shape="circle">
                <img alt="头像" :src="updateForm.userAvatar" />
              </a-avatar>
              <div class="arco-upload-list-picture-mask">
                <IconEdit />
              </div>
              <a-progress
                v-if="file && file.status === 'uploading' && file.percent < 100"
                :percent="file.percent"
                type="circle"
                size="mini"
                :style="{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translateX(-50%) translateY(-50%)',
                }"
              />
            </div>
            <div class="arco-upload-picture-card" v-else>
              <div class="arco-upload-picture-card-text">
                <IconPlus />
                <div style="margin-top: 10px; font-weight: 600">Upload</div>
              </div>
            </div>
          </div>
        </template>
      </a-upload>
    </div>
    <a-form
      :model="loginUser"
      label-align="left"
      auto-label-width
      style="max-width: 480px; margin: 0 auto"
    >
      <a-form-item field="用户名称" label="用户名称 :">
        <a-input v-model="updateForm.userName" placeholder="请输入用户名称" />
      </a-form-item>
      <a-form-item field="userProfile" label="简介 :">
        <a-textarea v-model="updateForm.userProfile" placeholder="请输入简介" />
      </a-form-item>
    </a-form>
  </a-drawer>
</template>
<script setup lang="ts">
import { useStore } from "vuex";
import {
  LoginUserVO,
  UserControllerService,
  UserUpdateMyRequest,
} from "../../generated";
import { computed, ref } from "vue";
import { DescData, Message } from "@arco-design/web-vue";

const store = useStore();
const loginUser: LoginUserVO = computed(
  () => store.state.user?.loginUser
) as LoginUserVO;
const data = [
  {
    label: "用户名称",
    value: store.state.user?.loginUser.userName,
  },
  {
    label: "用户角色",
    value: store.state.user?.loginUser.userRoleName,
  },
  {
    label: "用户简介",
    value:
      store.state.user?.loginUser.userProfile &&
      store.state.user?.loginUser.userProfile !== ""
        ? store.state.user?.loginUser.userProfile
        : "暂无简介",
  },
  {
    label: "创建时间",
    value: store.state.user?.loginUser.createTime,
  },
  {
    label: "上次修改时间",
    value: store.state.user?.loginUser.updateTime,
  },
] as DescData[];
const visible = ref(false);
const updateForm = ref<UserUpdateMyRequest>({
  ...store.state.user?.loginUser,
});
const openEditDrawer = () => {
  visible.value = true;
};
const handleOk = async () => {
  const res = await UserControllerService.updateMyUserUsingPost(
    updateForm.value
  );
  if (res.code === 0) {
    Message.success("更新成功！");
    visible.value = false;
    location.reload();
  } else {
    Message.error(res.msg);
  }
};
const closeEditDrawer = () => {
  visible.value = false;
};

const uploadAvatar = () => {
  console.log(111);
};

const file = ref();

const onChange = (_: any, currentFile: any) => {
  file.value = {
    ...currentFile,
    // url: URL.createObjectURL(currentFile.file),
  };
};
const onProgress = (currentFile: any) => {
  file.value = currentFile;
};
</script>
