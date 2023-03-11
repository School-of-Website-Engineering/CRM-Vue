import { Document, Location, Setting } from '@element-plus/icons-vue';

// 菜单数据接口
export interface MenuItem {
    name: string;
    url: string;
    icon?: any;
}

export const useMenu = () => {
    const menuItems: Array<MenuItem> = [
        { name: '首页', url: '/index', icon: Location },
        { name: '订单管理', url: '/order', icon: Document },
        { name: '统计分析', url: '/census', icon: Setting }
    ];
    return {
        menuItems
    };
};
