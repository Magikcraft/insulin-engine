<template>
		<md-layout md-column>
			<md-card>
			  <md-card-header>
			    <md-card-header-text>
			      <div class="md-title">Type One Status</div>
			      <div class="md-subhead">Statistics of the person affected by Type 1 Diabetes</div>
			    </md-card-header-text>
			  </md-card-header>

			  <md-card-content>
			    <md-list class="custom-list md-double-line">
			    	<md-list-item>
			    		<div class="md-list-text-container">
			    			<span>Type One Health</span>
			    			<span><md-icon v-for="i in ticksPerSecond" class="md-accent">favorite</md-icon></span>
			    		</div>
			    	</md-list-item>

			    	<md-list-item>
			    		<div class="md-list-text-container">
			    			<span>Type One Blood Glucose</span>
			    			<span>
			    				<md-input-container md-inline>
    								<md-input type="number" v-model="bloodGlucoseLevel" disabled></md-input>
								</md-input-container>
							</span>
			    		</div>
			    	</md-list-item>
			    	<md-list-item>
			    		<div class="md-list-text-container">
			    			<span>Type One Blood Insulin</span>
			    			<span>
			    				<md-input-container md-inline>
			    					<md-input type="number" v-model="bloodInsulinLevel" disabled></md-input>
			    				</md-input-container>
			    			</span>
			    		</div>
			    	</md-list-item>
			    </md-list>
			  </md-card-content>
			</md-card>
	</md-layout>
</template>
<script>

export default {
	name: "status-display",
	data() {
		return {
			insulinPerTick: 0.01,
			ticksPerSecond: 20,
			bloodGlucoseLevel: 0.005,
			bloodInsulinLevel: 0.005,
		};
	},
	methods: {
		noop(){
			console.log("Noop is a lie.");
		}
	},
	created(){
		console.log("status-display: created")
	}
}
</script>
<style>
	
</style>