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
    <div v-else class="aspect-square w-[22rem] grid place-content-center bg-slate-300 text-slate-600 rounded-full">
      <div v-if="imageStatus === 'loading'" class="text-4xl">
        adedero
      </div>

      <div v-if="imageStatus === 'error'" class="flex flex-col items-center justify-center gap-1">
        <p>Failed to load</p>
        <VButton @click="retryLoad" size="small" text="Retry" icon="pi pi-replay" />
        <!-- <button @click="retryLoad" class="bg-rose-500 text-white">Retry</button> -->
      </div>
    </div>
  </div>
</template>

<!-- <style scoped>
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
</style> -->
