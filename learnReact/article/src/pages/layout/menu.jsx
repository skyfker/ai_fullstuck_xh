import { RiseOutlined, SendOutlined, PieChartOutlined } from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('班级地区', '/city', <SendOutlined />, [
        getItem('抚州市', '/city/fz', null),
        getItem('南昌', '/city/nc', null),
    ]),
    getItem('学习数据', '/study-data', <RiseOutlined />, [
        getItem('leetCode题量', '/study-data/leetcode'),
        getItem('掘金文章', '/study-data/juejin'),
    ]),
    getItem('就业数据', '/work-data', <PieChartOutlined />, [
        getItem('Option 1', '/work-data1'),
        getItem('Option 2', '/work-data2'),
        getItem('Option 3', '/work-data3'),
        getItem('Option 4', '/work-data4'),
    ]),
];
const getLevelKeys = (items1) => {
    const key = {};
    const func = (items2, level = 1) => {
        items2.forEach((item) => {
            if (item.key) {
                key[item.key] = level;
            }
            if (item.children) {
                return func(item.children, level + 1);
            }
        });
    };
    func(items1);
    return key;
};
const levelKeys = getLevelKeys(items);

export { items, levelKeys }