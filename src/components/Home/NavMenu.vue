<template>
    <div class="common-layout">
        <!--左侧导航-->
        <el-aside width="200px" class="aside">
            <el-menu default-active="2" class="el-menu-vertical-demo" router>
                <el-menu-item v-for="(item, index) in menuItems" :key="index" :index="item.url">
                    <el-icon><Icons :icon="item.icon" /></el-icon>
                    <span>{{ item.name }}</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
    </div>
</template>

<script setup lang="ts">
import { useMenu } from '@/components/Home/usMenu';
import Icons from '@/components/common/icons.vue';
const { menuItems } = useMenu();
</script>

<style lang="scss" scoped>
.aside {
    height: 100vh;
}
</style>
