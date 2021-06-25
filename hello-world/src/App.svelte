<script>
  import '~/smelte/dist/smelte.css'
  import '~/smelte/dist/gfonts.css'

  import { Button } from '~/button'
  import { ThemeSwitch } from '~/theme-switch'
  
  function sayHi() {
    alert(sentence);
  }

  $: sentence = `Hello ${name}!`

  export let name = 'World';
</script>

<main>
  <ThemeSwitch />
  <h1>{sentence}</h1>
  <Button on:click={sayHi} block=true>Click Me!</Button>
</main>