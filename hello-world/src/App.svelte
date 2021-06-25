<script>
  import '~/smelte/dist/smelte.css';

  import { Button } from '~/button'
  
  function sayHi() {
    alert(sentence);
  }

  $: sentence = `Hello ${name}!`

  export let name = 'World';
</script>

<main>
  <h1>{sentence}</h1>
  <Button on:click={sayHi} block=true>Click Me!</Button>
</main>

<style>
  @import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500|Material+Icons&display=swap';
</style>