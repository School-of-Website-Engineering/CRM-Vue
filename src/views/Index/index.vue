<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
    </el-table>
</template>

<script setup lang="ts">
import UserService, { UserDataState } from '@/api/user';
//定义接口
interface TableData {
    date: string;
    name: string;
    address: string;
}

// 请求表格数据
const getTableData = async() => {
    const res = await UserService.getUserData();
    console.log(res);
};
getTableData();

//定义数据
const tableData: Array<TableData> = [
    {
        date   : '2016-05-03',
        name   : 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date   : '2016-05-02',
        name   : 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date   : '2016-05-04',
        name   : 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date   : '2016-05-01',
        name   : 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    }
];
</script>

<style lang="scss" scoped></style>
