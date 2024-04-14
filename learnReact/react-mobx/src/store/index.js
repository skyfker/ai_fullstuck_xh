import React from 'react'
import counter from './counterStore'
import movie from './movieStore'

class RootStore {
    constructor() {
        this.counterStore = counter
        this.movieStore = movie
    }
}
const rootStore = new RootStore()

const context = React.createContext(rootStore)


const useStore = () => React.useContext(context)

export {useStore}