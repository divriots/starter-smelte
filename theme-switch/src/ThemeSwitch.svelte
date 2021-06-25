<script>
  import { Button } from '~/button'
  import { Tooltip } from 'smelte'

  let darkMode = false

  function switchTheme () { darkMode = !darkMode }

  function updateClass(darkMode) {
    document.body.classList[darkMode
      ? 'add'
      : 'remove'
    ]('mode-dark')
  }
  
  $: icon = `${darkMode? 'light' : 'dark'}_mode`
  $: updateClass(darkMode)
  $: tooltip = `Switch to ${darkMode? 'light' : 'dark'} mode`
  
</script>

<Tooltip>
  <Button icon={icon} on:click={switchTheme} slot="activator">
    <slot/>
  </Button>
  {tooltip}
</Tooltip>