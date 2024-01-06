<template>
    <div class="registration-wrap" :class="[{active: registrationContent}]">
            <div class="registration_content">
                <div class="close_icon cursor" @click="registrationContent = !registrationContent">
                    <img src="../../icons/close.svg" alt="close">
                </div>
                <div class="login-page" v-if="login">
                    <div class="title text-fz40-lh50-fw400-a" style="text-align: center; margin: 8px 0 24px;">Register</div>
                    <form action="#">
                        <Input label="Username" placeholder="Username or Email Adress" type="email"/>
                        <Input label="Username" placeholder="Username or Email Adress" type="email"/>
                        <InputPassword label="Password" placeholder="Password"/>
                        <div class="foget-password">
                            <div style="display: flex;">
                                <FormCheck />
                                <div class="text-fz12-lh24-fw500-p text-grey" style="margin-left: 8px;">Remember me</div>
                            </div>
                            <div class="form-likn cursor">Forgot Password</div>
                        </div>
                        <PrimaryButton>Login</PrimaryButton>
                        <div class="form_end_link">
                            <div class="text-fz12-lh24-fw500-p text-grey">Not a mamber?</div>
                            <div class="form-likn cursor">Register</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    data() {
        return {
            register: true,
            login: true,
            registrationContent: true,
            registerTitle: "Login",
            registerLinkTitle: "Register",
        }
    },
}
</script>
<style scoped>
.registration-wrap{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 0vh;
    background-color: rgba(16, 13, 34, 0.54);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    backdrop-filter: blur(3px);
    overflow: hidden;
    transition: all .8s;
    z-index: 12;
}
.registration-wrap.active{
    z-index: 200;
    height: 100vh;
}
.registration-wrap .registration_content{
    background-color: var(--white);
    padding: 24px 27px 32px;
    border-radius: 8px;
    width: 392px;
    position: relative;
    transform: perspective(0px) translate3d(0px,0,  -700px);
    overflow: hidden;
    z-index: 13;
    transition: all 1s;
}
.registration-wrap.active .registration_content{
    transform: perspective(1000px) translate3d(0, 0, 0);
}
.close_icon{
    position: absolute;
    top: 23px;
    right: 22px;
}
.form_end_link{
    display: flex;
    justify-content: center;
    margin-top: 24px;
}
.foget-password{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}
@media (max-width: 500px) {
    .registration-wrap.active .registration_content{
        width: 92%;
    }
}
</style>