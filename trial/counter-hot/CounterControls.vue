<template>
	<div>
		Value: {{count}}
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementIfOdd">Increment If Odd</button>
		<button @click="incrementAsync">Increment Async</button>
		<div>
			<div>Recent History (last 5 entries): {{recentHistory}}</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import {mapGetters, mapActions} from 'vuex'

	export default {
		computed: mapGetters([
			'count',
			'recentHistory'
		]),
		methods: mapActions([
			'increment',
			'decrement',
			'incrementIfOdd',
			'incrementAsync'
		])
	}
</script>
