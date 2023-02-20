<template>
    <div
      v-editable="blok"
    >
      <img v-if="blok.image"
        :src="blok.image.filename"
        :alt="blok.image.alt"
      />
      <div>
        <h3>
          {{ blok.name }}
        </h3>
      </div>
    </div>
  </template>
   
  <script setup>
  defineProps({ blok: Object })
  </script>