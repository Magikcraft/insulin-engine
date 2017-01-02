<template>
	<md-layout md-column>
		<md-card>
			<md-card-header>
				<md-card-header-text>
					<div class="md-title">Type One Actions</div>
					<div class="md-subhead">Actions that the type one user can take to interact with the simplified model</div>
				</md-card-header-text>
			</md-card-header>
			<md-card-content>
					<md-list class="custom-list md-double-line">
						<md-list-item>
							<div class="md-list-text-container">
								<span>Eat Carbohydrates</span>
								<span>
									<md-input-container md-inline>
										<md-input type="number" :v-model="carbosToEat" />
									</md-input-container>
								</span>
							</div>
					    	<md-button class="md-button md-list-action md-raised md-primary">
        						Eat
      						</md-button>
						</md-list-item>
						<md-list-item>
							
							<div class="md-list-text-container">
								<span>Take Insulin</span>
								<span>
								<md-input-container md-inline>
									<md-input type="number" :v-model="insulinToTake" />
									</md-input-container>
								</span>
							</div>

							<md-button class="md-button md-list-action md-raised md-primary">
								Take
							</md-button>
						</md-list-item>
					</md-list>
			</md-card-content>
		</md-card>
	</md-layout>
</template>
<script>
export default {
	name: "action-pane",
	data() {
		return {
			carbosToEat: 0,
			insulinToTake: 0
		}
	}
}
</script>
<style></style>