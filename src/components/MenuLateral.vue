<template>
    <div>
        <div class="columns">

            <div class="column is-2">


                <aside class="aside is-placed-left is-expanded">
                    <div class="menu is-menu-main">
                        <ul class="menu-list">
                            <li>
                                <a href="index.html" class="is-active router-link-active has-icon">
                                    <span class="icon"><i class="mdi mdi-desktop-mac"></i></span>
                                    <span class="menu-item-label"><span>GeldWatch</span></span>
                                </a>
                            </li>
                        </ul>
                        <p class="menu-label">Cotações</p>
                        <ul class="menu-list">
                            <li>
                                <a href="tables.html" class="has-icon">
                                    <span class="icon has-update-mark"><i class="mdi mdi-table"></i></span>
                                    <span class="menu-item-label">Moedas</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms.html" class="has-icon">
                                    <span class="icon"><i class="mdi mdi-square-edit-outline"></i></span>
                                    <span class="menu-item-label">Crypto</span>
                                </a>
                            </li>
                            <li>
                                <a href="profile.html" class="has-icon">
                                    <span class="icon"><i class="mdi mdi-account-circle"></i></span>
                                    <span class="menu-item-label">Títulos Financeiros</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: 'MenuLateral',

}
</script>