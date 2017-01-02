<template>
  <div id="app">
  <md-toolbar class="md-primary md-large">
    <h1>Insulin Engine v2.0</h1>
  </md-toolbar>
  <md-layout md-row-large>
    <!-- 
    <md-layout md-column-small>
      <md-avatar class="md-avatar-icon md-accent">
        <md-icon>home</md-icon>
      </md-avatar>
    </md-layout>
    <md-layout md-column-small>
        <md-card>
          <md-card-actions>
            <md-button>Action A</md-button>
            <md-button>Action B</md-button>
          </md-card-actions>
        </md-card>
    </md-layout> -->

      <status-display></status-display>
      <action-pane></action-pane>

  </md-layout>
  </div>

</template>

<script>
import Hello from './components/Hello'
import StatusDisplay from './components/StatusDisplay'
import ActionPane from './components/ActionPane'
export default {
  name: 'app',
  components: {
    Hello,
    StatusDisplay,
    ActionPane
  }
}
</script>

<style>
</style>
