<template>
    <div class="login">
        <SimpleHeader :title="state.type === 'login' ? '登录' : '注册'" />
        <img class="logo"
            src="data:image/jpeg;base64,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"
            alt="">
        <div class="login-body login" v-if="state.type === 'login'">
            <van-form @submit="onSubmit">
                <van-field v-model="state.username" name="用户名" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="state.password" type="password" name="密码" label="密码" placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />
                <van-field v-model="state.verify" name="验证码" label="验证码" placeholder="验证码"
                    :rules="[{ required: true, message: '请填写验证码' }]">
                    <template #button>
                        <ImageVerify ref="verifyRef" />
                    </template>
                </van-field>
                <div style="margin: 16px;">
                    <div class="link-register" @click="toggle('register')">立即注册</div>
                    <van-button round block type="primary" native-type="submit">
                        登录
                    </van-button>
                </div>
            </van-form>

        </div>
        <div class="login-body register" v-else>
            <van-form @submit="onSubmit">
                <van-field v-model="state.username" name="用户名" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="state.password" type="password" name="密码" label="密码" placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />
                <van-field v-model="state.verify" name="验证码" label="验证码" placeholder="验证码"
                    :rules="[{ required: true, message: '请填写验证码' }]">
                    <template #button>
                        <ImageVerify ref="verifyRef" />
                    </template>
                </van-field>
                <div style="margin: 16px;">
                    <div class="link-login" @click="toggle('login')">已有帐号，立即登录</div>
                    <van-button round block type="success" native-type="submit">
                        注册
                    </van-button>
                </div>
            </van-form>

        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import SimpleHeader from '../components/SimpleHeader.vue';
import ImageVerify from '../components/ImageVerify.vue';
import { showToast } from 'vant';
import { login } from '../api/user.js'
import { register } from '../api/user.js'
import md5 from 'md5'

const verifyRef = ref(null)

// onMounted(() => {
//     console.log(verifyRef.value.verifyCode.code);
// })

const state = reactive({
    username: '',
    password: '',
    verify: '',
    type: 'login'
})

const toggle = (type) => { //切换登录和注册两种模式
    state.type = type
}

const onSubmit = async () => {
    // console.log(state.username, state.password, state.verify);
    if (state.verify !== verifyRef.value.verifyCode.code) {
        showToast('验证码错误')
        return
    }
    if (state.type === 'login') { // 登录
        // 发请求
        const { data } = await login({
            'loginName': state.username,
            'passwordMd5': md5(state.password)
        })
        console.log(data);
        localStorage.setItem('token', data)
        window.location.href = '/'  // 跳页面浏览器会刷新

    } else { // 注册
    //register 成功后切换到登录状态
        const { data } = await register({
            'loginName': state.username,
            'password': state.password
        })
        console.log(data);

    }
}
</script>

<style lang="less" scoped>
.login {
    .logo {
        width: 120px;
        height: 120px;
        display: block;
        margin: 80px auto 20px;
    }

    .login-body {
        padding: 0 20px;
    }

    .login {
        .link-register {
            font-size: 14px;
            margin-bottom: 20px;
            color: #1989fa;
            display: inline-block;
        }
    }

    .register {
        .link-login {
            font-size: 14px;
            margin-bottom: 20px;
            color: #1989fa;
            display: inline-block;
        }
    }

    .verify-bar-area {
        margin-top: 24px;

        .verify-left-bar {
            border-color: #1baeae;
        }

        .verify-move-block {
            background-color: #1baeae;
            color: #fff;
        }
    }

    .verify {
        >div {
            width: 100%;
        }

        display: flex;
        justify-content: center;

        .cerify-code-panel {
            margin-top: 16px;
        }

        .verify-code {
            width: 40% !important;
            float: left !important;
        }

        .verify-code-area {
            float: left !important;
            width: 54% !important;
            margin-left: 14px !important;

            .varify-input-code {
                width: 90px;
                height: 38px !important;
                border: 1px solid #e9e9e9;
                padding-left: 10px;
                font-size: 16px;
            }

            .verify-change-area {
                line-height: 44px;
            }
        }
    }
}
</style>

<style>
.van-cell {
    align-items: center;
}
</style>