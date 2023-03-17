<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
    </el-table>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import UserService, { UserDataState } from '@/api/user';
const tableData = ref<UserDataState[]>([]);
// 请求表格数据
const getTableData = async() => {
    const res = await UserService.getUserData();
    console.log(res);
};
getTableData();
</script>

<style lang="scss" scoped></style>
