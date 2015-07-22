

function renderObjectsFromArray() {
	var locations = [
		{
			image: 'assets/1.jpg',
			title: 'Mount Rainier, WA',
			equipment: 'MSR Stove'
		},

		{
			image: 'assets/2.jpg',
			title: 'Point Reyes, CA',
			equipment: 'Sun Protection'
		},

		 {
			image: 'assets/3.jpg',
			title: 'Red Rocks, CA',
			equipment: 'Rockclimbing'
		},

	]


for (var i = 0; i < locations.length; i++) {
	renderNewCard(locations[i].image, locations[i].title, locations[i].equipment)
};
}

renderObjectsFromArray();