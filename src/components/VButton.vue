<script setup>
const props = defineProps({
  type: { type: String },
  icon: { type: String },
  text: { type: String },
  outlined: { type: Boolean },
  buttonClass: { type: String },
  size: { type: String, default: 'normal' }
});

const baseClass =
  props.size === 'small' ? 'transition-colors flex items-center justify-center gap-3 text-sm px-3 py-2' :
    props.size === 'large' ? 'transition-colors flex items-center justify-center gap-3 px-5 py-3' :
  'transition-colors flex items-center justify-center gap-3 px-4 py-2'

const classNames = {
  baseClass,
  primaryClass: 'border border-transparent bg-rose-500 hover:bg-rose-600 text-white',
  outlinedClass: 'border border-rose-500 text-rose-500 hover:bg-rose-50 dark:text-white dark:border-white dark:hover:bg-slate-800'
}
</script>

<template>
  <button :type
    :class="[classNames.baseClass, outlined ? classNames.outlinedClass : classNames.primaryClass, buttonClass ]">
    <span v-if="icon" :class="icon"></span>
    <span>{{ text }}</span>
  </button>

</template>