<template>
    <div class="navbar-box" id="navbar">
        <div class="navbar">
            <Logo class="cursor"/>
            <ul class="nav_ul">
                <li>
                    <div class="text-fz14-lh24-fw500-p page-link">Home</div>
                </li>
                <li>
                    <div class="text-fz14-lh24-fw500-p page-link">Shop</div>
                </li>
                <li>
                    <div class="text-fz14-lh24-fw500-p page-link">Wishlist</div>
                </li>
                <li>
                    <div class="text-fz14-lh24-fw500-p page-link">Order Traking</div>
                </li>
                <li>
                    <div class="text-fz14-lh24-fw500-p page-link">Blogs </div>
                </li>
            </ul>
            <div class="nav_end">
                <div class="search cursor">
                    <div class="search_icon">
                        <img src="../icons/search.svg" alt="search">
                    </div>
                    <span class="text-fz14-lh24-fw500-p">Search</span>
                </div>
                <div class="nav_line"></div>
                <div class="login-line-link cursor text-fz14-lh24-fw500-p" @click="active = !active">
                    Log in
                </div>
                <div class="bag_icon cursor">
                    <img src="../icons/bag.svg" alt="bag">
                </div>
            </div>
            <div class="hamburger-icon cursor" @click="hamburgerNav">
                <img v-if="!ham_active" src="../icons/hamburger.svg" alt="ham">
                <img v-else src="../icons/close.svg" alt="ham">
            </div>
        </div>
    </div>

    <div class="nav_opacity" :class="[{active: active}]">
        <div class="opacity_content">
            <div class="close_icon cursor" @click="active = !active">
                <img src="../icons/close.svg" alt="close">
            </div>
            <div class="login-page" v-if="login">
                <div class="title text-fz40-lh50-fw400-a" style="text-align: center; margin: 8px 0 24px;">Login</div>
                <form action="#">
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

    
    <div class="nav_hamburger-page" :class="[{ham_active: ham_active}]">
        <div class="ham_show">
            <div class="ham_search">
                <input type="text" class="ham_search_input" placeholder="Search">
                <img src="../icons/Search.svg" alt="search" class="search_icon">
            </div>
            <ul class="nav_hamburger_ul">
                <li>
                    <div class="text-fz14-lh24-fw500-p ham_page-link">Home</div>
                </li>
                <li>
                    <div class="text-fz14-lh24-fw500-p ham_page-link">Shop</div>
                </li>
                <li>
                    <div class="text-fz14-lh24-fw500-p ham_page-link">Wishlist</div>
                </li>
                <li>
                    <div class="text-fz14-lh24-fw500-p ham_page-link">Order Traking</div>
                </li>
                <li>
                    <div class="text-fz14-lh24-fw500-p ham_page-link">Blogs </div>
                </li>
                <li>
                    <div class="text-fz14-lh24-fw500-p ham_page-link">My cart </div>
                </li>
            </ul> 
            <div class="ham_button" @click="active= !active">
                <PrimaryButton>Login</PrimaryButton>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: false,
            login: true,
            register: false,
            hamburger: true,
            ham_active: false,
            bag: false,
        };
    },
    methods: {
        hamburgerNav(){
            this.ham_active = !this.ham_active;
            if(this.ham_active){
                document.getElementById("app").style.position = 'fixed';
            }
        }
    },
}
</script>

<style scoped>
.navbar-box{
    width: 100%;
    position: relative;
    height: 0;
    z-index: 102;
}
.navbar{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    /* width: 100%; */
    padding: 34px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 102;
}
.nav_ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 54px;
}
.nav_ul .page-link{
    cursor: pointer;
    transition: all 0.25s;
}
.nav_end{
    display: flex;
    gap: 31px;
    align-items: center;
}
.nav_end .search{
    display: flex;
    gap: 8px;
}
.nav_ul .login-line-link{
    line-height: 14px;
    border-bottom: 1px solid var(--grey-87);

}
.nav_end .nav_line{
    height: 31px;
    width: 1px;
    background-color: var(--grey-87);
}
.nav_end .bag_icon{
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: rgba(225, 225, 225, .5);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--grey-f6);
}

/* Login , register, bag, and hamburger pages */
.nav_opacity{
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
.nav_opacity.active{
    z-index: 200;
    height: 100vh;
}
.nav_opacity .opacity_content{
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
.nav_opacity.active .opacity_content{
    transform: perspective(1000px) translate3d(0, 0, 0);
}
.close_icon{
    position: absolute;
    top: 23px;
    right: 22px;
}
/* Login page */
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
/* hamburger page */
.nav_hamburger-page{
    display: none;
    transition: all 1s;
    overflow: hidden;
    width: 100%;
    z-index: 101;
    position: absolute;
    top: 0;
    padding-top: 83px;
    left: 0;
    right: 0;
    height: 0px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 26px 38px 0px rgba(5, 4, 16, 0.13);
}
.nav_hamburger-page .ham_show{
    background-color: #fff;
    height: 554px;
    transform: translateY(-554px);
    transition: all 1s;
    width: 88%;
    padding-top: 4px;
    margin: 0 auto; 
}
.nav_hamburger-page.ham_active{
    background-color: var(--white);
    height: 554px;
    position: fixed;
}
.nav_hamburger-page.ham_active .ham_show{
    transform: translateY(0px);
}
.hamburger-icon{
    display: none;
}
.ham_search{
    position: relative;
    width: 100%;
    padding-bottom: 10px;
}
.ham_search_input{
    width: 100%;
    padding: 0 17px 0 45px;
    height: 44px;
    border: 1px solid #ECEBED;
    border-radius: 4px;
    font-size: 14px;
    line-height: normal;
    font-weight: 500;
    font-family: PlusJakartaSans;
}
.ham_search .search_icon{
    position: absolute;
    top: 12px;
    left: 17px;
}
.nav_hamburger_ul .ham_page-link{
    padding: 14px 0;
    border-bottom: 1px solid var(--grey-e3);
    /* margin-top: 45px; */
}
.ham_button{
    margin-top: 23px;
}

@media (max-width: 1024px) {
  .navbar{
    padding: 24px 0;
    /* border-bottom: 1px solid red; */
  }
  .nav_ul{
    gap: 22px;
  }
  .navbar .nav_end{
    gap: 16px;
  }
}
@media (max-width: 768px) {
    .navbar{
        background-color: #fff;
    }
    .nav_ul{
        display: none;
    }
    .nav_end{
        display: none;
    }
    .nav_hamburger-page{
        display: block;
    }
    .hamburger-icon{
        display: block;
    }
    /* 88% */
}
@media (max-width: 500px) {
    .nav_opacity.active .opacity_content{
        width: 92%;
    }
    .nav_hamburger-page .ham_show{
        width: 92%;
    }
    /* 92% */
}


</style>