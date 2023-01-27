// Vou lançar a braba. Const dão erro quando são escritas erradas.
// const CHANGE_TO_DARK = 'CHANGE_TO_DARK';
// const CHANGE_TO_LIGHT = 'CHANGE_TO_LIGHT';
const CHANGE_THEME = 'CHANGE_THEME';

// Actions e os Dispatchs
// const actionChangeToDark = () => {
//   store.dispatch({ type: CHANGE_TO_DARK });
// }

const actionChangeTheme = () => {
  store.dispatch({ type: CHANGE_THEME });
}

// Reducer e seu estado inicial
const INITIAL_STATE = {
  theme: 'light',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    // case CHANGE_TO_DARK:
    //   // Montar a minha atualização
    //   return { theme: 'dark' };
    // case CHANGE_TO_LIGHT:
    //   return { theme: 'light' };
    case CHANGE_THEME:
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      // Isto é equivalente ao this.setState
      return { theme: newTheme };
    default:
      return state;
  }
};

// Eu estou criando a minha store para ser utilizada posteriormente.
const store = Redux.createStore(reducer);
// console.log(store);

// Criação do Subscribe, para executar toda vida que um estado é atualizado dentro reducer/store.
store.subscribe(() => {
  const { theme } = store.getState();
  console.log(theme);
  document.querySelector('#wrapper').className = theme;
  document.querySelector('#light-bulb').src = `img/${theme}.png`;
});

const toggleButton = document.querySelector('#light-switch');
toggleButton.addEventListener('click', actionChangeTheme);