<template>
    <div>
        <nav id="navbar-main" class="navbar is-fixed-top">
            <div class="navbar-brand">
                <a class="navbar-item is-hidden-desktop jb-aside-mobile-toggle">
                    <span class="icon"><i class="mdi mdi-forwardburger mdi-24px"></i></span>
                </a>
                <div class="navbar-item has-control">
                    <div class="control"><input placeholder="Search everywhere..." class="input"></div>
                </div>
            </div>
            <div class="navbar-brand is-right">
                <a class="navbar-item is-hidden-desktop jb-navbar-menu-toggle" data-target="navbar-menu">
                    <span class="icon"><i class="mdi mdi-dots-vertical"></i></span>
                </a>
            </div>
            <div class="navbar-menu fadeIn animated faster" id="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item has-dropdown has-dropdown-with-icons has-divider is-hoverable">
                        <a class="navbar-link is-arrowless">
                            <span class="icon"><i class="mdi mdi-menu"></i></span>
                            <span>Home</span>
                            <span class="icon">
                                <i class="mdi mdi-chevron-down"></i>
                            </span>
                        </a>
                    </div>
                    <a href="https://justboil.me/bulma-admin-template/free-html-dashboard/" title="About"
                        class="navbar-item has-divider is-desktop-icon-only">
                        <span class="icon"><i class="mdi mdi-help-circle-outline"></i></span>
                        <span>About</span>
                    </a>
                </div>
            </div>
        </nav>




        <section class="main-content columns"> 
            <!-- is-fullheight -->

            <aside class="column is-2 is-narrow-desktop ">
                <!-- is-fullheight section is-hidden-mobile -->
                <p class="menu-label is-hidden-touch">Navigation</p>
                <ul class="menu-list">
                    <li>
                        <a href="#" class="">
                            <span class="icon"><i class="fa fa-home"></i></span> Home
                        </a>
                    </li>
                    <li>
                        <a href="#" class="is-active">
                            <span class="icon"><i class="fa fa-table"></i></span> Links
                        </a>

                        <ul>
                            <li>
                                <a href="#">
                                    <span class="icon is-small"><i class="fa fa-link"></i></span> Link1
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="icon is-small"><i class="fa fa-link"></i></span> Link2
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="">
                            <span class="icon"><i class="fa fa-info"></i></span> About
                        </a>
                    </li>
                </ul>
            </aside>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
html,
body,
#app {
    height: 100%;
}

#app {
    min-height: 100%;
}

@media screen and (max-width: 768px) {
    #menu-toggle:checked+.nav-menu {
        display: block;
    }
}</style>