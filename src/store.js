import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    started: '',
    actionBtnText: 'Roll',
    showActionBtn: true,
    directions: '',
    isOneDieSelected: false,
    rollNumber: 0,
    rolledDice: [],
    savedDice: []
  },
  mutations: {
    
  },
  actions: {
    roll() {
      this.state.started = 'started'
      const dice = Array.prototype.slice.call(document.querySelectorAll('.die'))
      dice.map(x => x.classList.add('roll'))

      const setDiceValues = (() => {
        this.state.rolledDice = []
        dice.map(x => {
          if (!x.classList.contains('selected')) {
            if (x.classList.contains('one')) {
              this.state.rolledDice.push(1)
            } else if (x.classList.contains('two')) {
              this.state.rolledDice.push(2)
            } else if (x.classList.contains('three')) {
              this.state.rolledDice.push(0)
            } else if (x.classList.contains('four')) {
              this.state.rolledDice.push(4)
            } else if (x.classList.contains('five')) {
              this.state.rolledDice.push(5)
            } else if (x.classList.contains('six')) {
              this.state.rolledDice.push(6)
            }
          }
        })
      })()
      console.log('rolledDice:', this.state.rolledDice)
      this.state.showActionBtn = false
      this.state.directions = 'Make at least one selection'
      console.log(this.state.rollNumber)
      this.state.rollNumber++
      console.log(this.state.rollNumber)
    },
    toggleDieSelection() {
      if (this.state.started !== '') {
        if (event.target.classList.contains('selected')) {
          event.target.classList.remove('selected')
        } else {
          if (event.target.classList.contains('one')) {
            event.target.classList.add('selected')
          } else if (event.target.classList.contains('two')) {
            event.target.classList.add('selected')
          } else if (event.target.classList.contains('three')) {
            event.target.classList.add('selected')
          } else if (event.target.classList.contains('four')) {
            event.target.classList.add('selected')
          } else if (event.target.classList.contains('five')) {
            event.target.classList.add('selected')
          } else if (event.target.classList.contains('six')) {
            event.target.classList.add('selected')
          }
        }
        this.state.isOneDieSelected = false
        const checkSelections = (() => {
          const dice = Array.prototype.slice.call(document.querySelectorAll('.die'))
          dice.filter(x => {
            if (x.classList.contains('selected')) {
              this.state.isOneDieSelected = true
            }
          })
        })()
        if (this.state.isOneDieSelected) {
          this.state.showActionBtn = true
        } else {
          this.state.showActionBtn = false
        }
      }
    }
  }
})

export default store