<script>
  import { Button } from 'smelte';
</script>

<Button on:click {...$$props}>
  <slot>Button</slot>
</Button>