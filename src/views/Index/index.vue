<template>
    <div class="add-button">
        <el-button type="primary" @click="handleAdd('add', null)">添加</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column
            prop="date"
            label="日期"
            sortable
            width="180"
            column-key="date"
            :filters="dateData"
            :filter-method="filterHandler"
        />
        <el-table-column prop="date" label="日期" width="180" />
        <el-table-column prop="name" label="作者" width="180" />
        <el-table-column prop="address" label="标题" />
        <el-table-column prop="checked" label="状态">
            <template #default="{ row }">
                <el-tag v-if="row.checked" type="success">已审核</el-tag>
                <el-tag v-else type="danger">未审核</el-tag>
            </template>
        </el-table-column>
    </el-table>
    <!--弹出框-->
    <el-dialog v-model="dialogFormVisible" title="添加">
        <el-form :model="form">
            <el-form-item label="Promotion name">
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Zones">
                <el-select v-model="form.region" placeholder="Please select a zone">
                    <el-option label="Zone No.1" value="shanghai" />
                    <el-option label="Zone No.2" value="beijing" />
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogFormVisible = false"> Confirm </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import UserService, { UserDataState } from '@/api/user';
import type { TableColumnCtx } from 'element-plus';

const tableData = ref<UserDataState[]>([]);
const dialogFormVisible = ref<boolean>(false);
const form = ref({});

onMounted(() => {
    getTableData();
});
// 处理日期数据-动态获取
const dateData = computed(() => {
    // return tableData.value.map((item) => ({text : item.date, value : item.date}));
    // 	去重
    const dateArr = tableData.value.map((item) => item.date);
    const dateSet = new Set(dateArr);
    return [...dateSet].map((item) => ({ text: item, value: item }));
});

// 添加
const handleAdd = (type: string, row: UserDataState | null) => {
    dialogFormVisible.value = true;
    type === 'add' ? (form.value = {}) : (form.value = { ...row });
};

// 请求表格数据
const getTableData = async() => {
    const res = await UserService.getUserData();
    tableData.value = res.data;
};

// 筛选
const filterHandler = (value: string, row: UserDataState, column: TableColumnCtx<UserDataState>) => {
    return row.date === value;
};
</script>

<style lang="scss" scoped>
.add-button {
    line-height: 15px;
    height: 40px;

    button {
        display: flex;
        justify-content: left;
    }
}
</style>
