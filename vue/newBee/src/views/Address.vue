<template>
    <div>
        <simpleHeader title="地址管理" />
        <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit" 
        @click-item="onSelect"/>

    </div>
</template>

<script setup>
import simpleHeader from '@/components/simpleHeader.vue';
import { ref, onMounted } from 'vue';
import { showToast } from 'vant';
import { useRouter } from 'vue-router';
import { getAddressList } from '../api/address';    

const router = useRouter();
const chosenAddressId = ref(0);
const list = ref([]);

const onAdd = () => {
    router.push({ path: '/addressEdit', });
}
const onEdit = (item, index) => showToast('编辑地址:' + index);

onMounted(async() => {
    const {data} = await getAddressList()
    console.log(data);
    list.value = data.map(item => {
        if(item.defaultFlag === 1) {
            chosenAddressId.value = item.addressId;
        }
        return{
            id: item.addressId,
            name: item.userName,
            tel: item.userPhone,
            address: `${item.provinceName} ${item.cityName} ${item.regionName} ${item.detailAddress}`,
            isDefault: item.isDefault ? 'true' : 'false',
        }
    })
})

const onSelect = (item, index) => {
    console.log(item, index);
    router.push({path:'create-order',query:{addressId :item.id}})
}
</script>

<style lang="less" scoped></style>