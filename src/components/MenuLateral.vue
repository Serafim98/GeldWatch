<template>
    <aside class="aside is-placed-left is-expanded">
        <div class="menu is-menu-main">
            <ul class="menu-list">
                <li>
                    <a class="is-active router-link-active has-icon">
                        <span class="icon"><i class="mdi mdi-desktop-mac"></i></span>
                        <span class="menu-item-label"><span>GeldWatch</span></span>
                    </a>
                </li>
            </ul>
            <p class="menu-label">Cotações</p>
            <ul class="menu-list">
                <li>
                    <a class="has-icon">
                        <span class="icon has-update-mark"><i class="mdi mdi-table"></i></span>
                        <span class="menu-item-label" @click="$emit('ShowMoedas')">Moedas</span>
                    </a>
                </li>
                <li>
                    <a class="has-icon">
                        <span class="icon"><i class="mdi mdi-square-edit-outline"></i></span>
                        <span class="menu-item-label" @click="$emit('ShowCrypto')">Crypto</span>
                    </a>
                </li>
                <li>
                    <a class="has-icon">
                        <span class="icon"><i class="mdi mdi-account-circle"></i></span>
                        <span class="menu-item-label" @click="$emit('ShowTitulos')">Selic</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>


<script>

export default {
    name: 'MenuLateral',
    emits: ['ShowMoedas','ShowCrypto','ShowTitulos']

}
</script>