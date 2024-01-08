<script setup> 
import { useNavOpen } from '../stores/utilities.js'
const nav = useNavOpen()
</script>

<template>
    <svg viewBox="0 0 90.36 66" @click="nav.toggleNav" class="md:hidden">
        <g id="Layer_1-2" data-name="Layer 1">
            <rect class="cls-1" id="top" x="0" y="0" width="80" height="11.79" rx="5.89" ry="5.89" :class="{'is-open': nav.isOpen}"/>
            <rect class="cls-1" id="middle" x="0" y="22" width="80" height="11.79" rx="5.89" ry="5.89" :class="{'is-open': nav.isOpen}"/>
            <rect class="cls-1" id="bottom" x="0" y="44" width="80" height="11.79" rx="5.89" ry="5.89" :class="{'is-open': nav.isOpen}"/>
        </g>
    </svg>
</template>

<style scoped>
svg {
    width: 2rem;
    cursor: pointer;
    fill: var(--secondary)
}

.cls-1 {
    fill: inherit;
    transition: .4s;
}


#top.is-open {
    transform: rotate(45deg) translateX(15px) translateY(-10px);
    width: 78px;
    transition: .4s;
}

#bottom.is-open {
    transform: rotate(-45deg) translateX(-36px) translateY(1px);
    width: 78px;
    transition: .4s;
}

#middle.is-open {
    opacity: 0;
    transition: .4s;
}
</style>