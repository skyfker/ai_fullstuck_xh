<template>
    <div v-if="totlePrice>0">
        <table>
            <thead>
                <th>序号</th>
                <th>书籍名称</th>
                <th>出版日期</th>
                <th>价格</th>
                <th>购买数量</th>
                <th>操作</th>
            </thead>
            <tbody>
                <tr v-for="(item, index) in lists" :key="index">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.price }}</td>
                    <td>
                        <button @click="minus(index)">-</button>
                        <span class="counter">{{ item.count }}</span>
                        <button @click="add(index)">+</button>
                    </td>
                    <td>
                        <button @click="move(index)">移除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2>总价格: {{ totlePrice }}</h2>
    </div>

    <div v-else>
        <h2>购物车为空~</h2>
    </div>
</template>
  
<script>
export default {
    props: {
        lists: {
            type: Array,
            default: () => []
        },
    },
    methods: {
        minus(i) {
            if(this.lists[i].count > 1) {
                this.lists[i].count -= 1
            }else{
                this.move(i)
            }
        },
        add(i) {
            this.lists[i].count += 1
        },
        move(i){
            this.lists.splice(i,1)
        },

    },
    computed: {
        totlePrice() {
            let sum = 0
            for (let j = 0; j < this.lists.length; j++) {
                sum = sum + this.lists[j].count * this.lists[j].price
            }
            return sum
        }
    }
}
</script>
  
<style lang="css" scoped>
table {
    border: 1px solid #e9e9e9;
    border-collapse: collapse;
    border-spacing: 0;
}

th,
td {
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
}

th {
    background-color: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
}

.counter {
    margin: 0 5px;
}
</style>