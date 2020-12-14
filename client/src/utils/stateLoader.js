export const loadState = () => {
    try {
      let serializedState = localStorage.getItem("broxblog:state");
  
      if (serializedState === null) {
        return initializeState();
      }
  
      return JSON.parse(serializedState);
    } catch (err) {
      return initializeState();
    }
  };
  
  export const saveState = (state) => {
    try {
      let serializedState = JSON.stringify(state);
      localStorage.setItem("broxblog:state", serializedState);
    } catch (err) {}
  };
  
  export const initializeState = () => {
    return {
      //state object
    };
  };
  