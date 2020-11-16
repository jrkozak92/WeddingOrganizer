Vue.component('venue-list',{
    template: `
    <div>
        <div>
            <ul>
                <li is="venue" v-for="(venue, index) in venues" v-bind:title="venue.name" v-bind:key="venue.id" v-on:remove="venues.splice(index, 1)"></li>
            </ul>
        </div>
        <p>
            <input type="text" id="newVenue" v-model="newVenue" @click="clearInput" v-on:keyup.enter="addVenue">
            <button class="button" @click="addVenue">Add It!</button>
        </p>
    </div>
    `,
    data() {
        return {
            venues:[
                {id: '0', name: 'Contigo Ranch'},
                {id: '1', name: 'Canyon Lake Cabins and Cottages'},
                {id: '2', name: "Cutter's Valley Events"}
            ],
            newVenue: 'Enter another Venue here!'          
        }
    },
    methods: {
        addVenue() {
            if (this.newVenue === ''){
                alert('Please enter a Venue!');
            } else {
                let newVenueObject = {id:`${this.venues.length}`, name: `${newVenue.value}`};
                this.venues.push(newVenueObject);
            }
            
            this.newVenue = '';
        },

        clearInput() {
            if (this.newVenue === 'Enter another Venue here!'){
                return this.newVenue = '';
            }                
        }
    }
});

Vue.component('venue',{
    template: `
        <li>
            {{ title }}
            <button class="removeButton" @click="$emit('remove')">Remove</button>
        </li>
        `,
        props: ['title']
});

Vue.component('details-list', {
    template: `
    <div>
        <detail-card v-for="(venue, index) in venues" v-bind:title="venue.name" v-bind:key="venue.id" v-on:remove="venues.splice(index, 1)"></detail-card>
    </div>
    `,
    data() {
        return {
            venues: []
        }
    },
    methods: {

    }
});

Vue.component('detail-card',{
    template: `
    // this component is the container for the header and details
    <div class="details-box">
        <button :class="dheader" @click="toggleDinfo()">
            {{ venue.name }}
            <button class="removeButton" @click="$emit('remove')">Remove</button>
        </button>
        <div class="dinfo" v-show="detailsVisible">
        </div>
    </div>
    `,
});

