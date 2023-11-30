import { makeAutoObservable } from 'mobx'

class Store {
    selectedFeature = null;
    keys = null; // bins里的样本index
    sample = null; // Data List里选中的样本

    constructor() {
        makeAutoObservable(this);
    }

    setSelectedFeature = (selectedFeature) => {
        this.selectedFeature = selectedFeature;
    }

    setKeys = (keys) => {
        this.keys = keys;
    }

    setSample = (sample) => {
        this.sample = sample;
    }
}

export const store = new Store();