<template>
    <div class="container">
        <div class="footer-wrap">
            <div class="footer-row">
                <Logo />
                <div class="networ-wrap mt">
                    <div class="text-fz14-lh24-fw500-p text-black">Address</div>
                    <div class="text-fz14-lh24-fw500-p text-grey">2118 Thornridge Cir. Syracuse, Connecticut 35624</div>
                </div>
                <div class="networ-wrap">
                    <div class="text-fz14-lh24-fw500-p text-black">Email</div>
                    <div class="text-fz14-lh24-fw500-p text-grey">Shoppes@example.com</div>
                </div>
                <div class="networ-wrap">
                    <div class="text-fz14-lh24-fw500-p text-black">Phone Number</div>
                    <div class="text-fz14-lh24-fw500-p text-grey">+321 4356 2212</div>
                </div>
            </div>
            <div class="footer-row foter-menu">
                <div class="footer-nav">
                    <div class="text-fz14-lh24-fw500-p text-black">Menu</div>
                    <div class="text-fz14-lh24-fw500-p text-grey cursor">Home</div>
                    <div class="text-fz14-lh24-fw500-p text-grey cursor">Shop</div>
                    <div class="text-fz14-lh24-fw500-p text-grey cursor">Wishlist</div>
                    <div class="text-fz14-lh24-fw500-p text-grey cursor">Order Tracking</div>
                    <div class="text-fz14-lh24-fw500-p text-grey cursor">Blogs </div>
                </div>
                <div class="footer-nav">
                    <div class="text-fz14-lh24-fw500-p text-black">Quick Links</div>
                    <div class="text-fz14-lh24-fw500-p text-grey cursor">login</div>
                    <div class="text-fz14-lh24-fw500-p text-grey cursor">Register</div>
                    <div class="text-fz14-lh24-fw500-p text-grey cursor">My Cart</div>
                </div>
            </div>
            <div class="footer-row">
                <div class="text-fz14-lh24-fw500-p text-black">Let’s Stay in Touch</div>
                <div class="footer-email">
                    <input type="text" class="footer-input" placeholder="Enter Your Email Address">
                    <div class="footer-email_button">
                        <PrimaryButton class="f_e_m">Subscribe</PrimaryButton>
                    </div>
                </div>
    
                <div class="foter-network-icon-wrap">
                    <div class="text-fz14-lh24-fw500-p text-black">Follow our Social</div>
                    <div class="network-icon-wrap">
                        <div class="foter-network-icon cursor">
                            <img src="../icons/Icon - Facebook.svg" alt="facebook">
                        </div>
                        <div class="foter-network-icon cursor">
                            <img src="../icons/Icon - insta.svg" alt="facebook">
                        </div>
                        <div class="foter-network-icon cursor">
                            <img src="../icons/Icon - Watsap.svg" alt="facebook">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright text-fz14-lh24-fw500-p text-grey">
            Copyright Shoppes 2023 All Right Reserved
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
.footer-wrap{
    border-top: 1px solid var(--grey-e6); 
    border-bottom: 1px solid var(--grey-e6); 
    padding: 40px 0 48px;
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}   
.footer-row .networ-wrap{
    margin-top: 20px;
}
.footer-row .networ-wrap.mt{
    margin-top: 36px;
}
.footer-row.foter-menu{
    display: flex;
    justify-content: space-between;
    gap: 102px;
}
.footer-row.foter-menu .footer-nav{
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.copyright{
    padding: 28px 0 37px;
    text-align: center;
}
.footer-email{
    position: relative;
    margin-top: 12px;
}
.footer-email .footer-input{
    font-size: 12px;
    line-height: 24px;
    font-weight: 500;
    font-family: PlusJakartaSans;
    width: 320px;
    padding: 10px 130px 10px 16px;
    border-radius: 50px;
    border: none;
    background-color: var(--grey-f6);

}
.footer-email_button{
    position: absolute;
    top:0 ;
    right: 0;
}
.footer-email_button .f_e_m{
    padding: 12px 28px;
}
.foter-network-icon-wrap{
    margin-top: 32px;
}
.network-icon-wrap{
    margin-top: 12px;
    display: flex;
    justify-content: start;
    gap: 12px;
}
.network-icon-wrap .foter-network-icon{
    border-radius: 50px;
    background-color: var(--grey-f6);
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (max-width: 1200px) {
    .footer-wrap{
        flex-direction: column;
        gap: 30px;
        align-items: start;
        padding-left: 120px;
    }
}
@media (max-width: 768px) {
    .footer-wrap{
        gap: 30px;
        padding-left: 0px;
    }
}
@media (max-width: 500px) {
    .footer-email .footer-input{
        width: 300px;
    }
}
</style>