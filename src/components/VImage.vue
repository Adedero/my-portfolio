<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Image'
  },
  imageClass: {
    type: String
  }
});

const imageStatus = ref('loading'); // 'loading', 'loaded', 'error'

const onLoad = () => {
  imageStatus.value = 'loaded';
};

const onError = () => {
  imageStatus.value = 'error';
};

const retryLoad = () => {
  imageStatus.value = 'loading';
  const img = new Image();
  img.src = props.src;
  img.onload = onLoad;
  img.onerror = onError;
};

onMounted(() => {
  const img = new Image();
  img.src = props.src;
  img.onload = onLoad;
  img.onerror = onError;
});
</script>

<template>
  <div class="image-container">
    <img v-if="imageStatus === 'loaded'" :src="src" :alt="alt" @load="onLoad" @error="onError" :class="imageClass" />
    <div v-else class="aspect-square max-h-[474px] grid place-content-center bg-slate-300 text-slate-600">
      <div v-if="imageStatus === 'loading'" class="text-4xl">
        adedero
      </div>

      <div v-if="imageStatus === 'error'">
        <p>Failed to load</p>
        <button @click="retryLoad">Retry</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
