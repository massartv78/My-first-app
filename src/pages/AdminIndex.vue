<template>
  <h1>Admin Index</h1>
  <ExampleComponent></ExampleComponent>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import ExampleComponent from 'src/components/ExampleComponent.vue';

  export default defineComponent({
    components: {
      ExampleComponent: ExampleComponent

}

  });

</script>

