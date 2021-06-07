/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    dieKey1: 0,
    dieKey2: 1,
    dieKey3: 2,
    dieKey4: 3,
    dieKey5: 4,
    started: false,
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
    randDieValue() {
      const randValue = Math.floor(Math.random() * 6) + 1
      if (randValue === 1) {
        return this.dieValue = 'one'
      } else if (randValue === 2) {
        return this.dieValue = 'two'
      } else if (randValue === 3) {
        return this.dieValue = 'three'
      } else if (randValue === 4) {
        return this.dieValue = 'four'
      } else if (randValue === 5) {
        return this.dieValue = 'five'
      } else if (randValue === 6) {
        return this.dieValue = 'six'
      }
    },
    roll() {
      this.state.started = true

      const dice = Array.prototype.slice.call(document.querySelectorAll('.die'))

      dice.map(x => {
        if (!x.classList.contains('selected')) {
          x.classList.add('roll')
          if (this.state.rollNumber > 0) {
            if (x.parentElement.classList.contains('die-pos-1')) {
              this.state.dieKey1 += 20
            } else if (x.parentElement.classList.contains('die-pos-2')) {
              this.state.dieKey2 += 20
            } else if (x.parentElement.classList.contains('die-pos-3')) {
              this.state.dieKey3 += 20
            } else if (x.parentElement.classList.contains('die-pos-4')) {
              this.state.dieKey4 += 20
            } else if (x.parentElement.classList.contains('die-pos-5')) {
              this.state.dieKey5 += 20
            }
          }
        }
      })

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
      this.state.rollNumber++
      console.log('rollNumber', this.state.rollNumber)
    },
    toggleDieSelection() {
      const dice = Array.prototype.slice.call(document.querySelectorAll('.die'))
      dice.map(x => x.classList.remove('roll'))
      if (this.state.started) {
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
        let selectedCount = 0
        const checkSelections = (() => {
          const dice = Array.prototype.slice.call(document.querySelectorAll('.die'))
          dice.map(x => {
            if (x.classList.contains('selected')) {
              this.state.isOneDieSelected = true
              selectedCount++              
            }
          })
        })()
        console.log('selectedCount', selectedCount)
        if (this.state.isOneDieSelected) {
          this.state.showActionBtn = true
        } else {
          this.state.showActionBtn = false
        }
        if (selectedCount === 5) {
          this.state.actionBtnText = 'Complete turn'
        } else {
          this.state.actionBtnText = 'Roll'
        }
      }
    }
  }
})

export default store