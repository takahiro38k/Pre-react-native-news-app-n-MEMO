import { combineReducers, createStore } from 'redux';
// reduxのdebug用tool
import { composeWithDevTools } from 'redux-devtools-extension';
// reduxのstoreをstorageに保存できる。
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage'

import userReducer from './reducers/user';

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // 保存するstoreのtreeを指定(storeすべてを保存するとstorageを圧迫する可能性があるため)。
  whitelist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(rootReducer);
// ▲reduxのdebug用toolを使用するため、2nd paramを追記▲
// const store = createStore(rootReducer, composeWithDevTools());
// ▲redux-persistの導入にともない、1st paramを変更。
const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(store);
export default store;
