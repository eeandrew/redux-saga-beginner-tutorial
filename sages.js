import {takeEvery,takeLatest} from 'redux-saga';
import{put,call,take,select} from 'redux-saga/effects';


export function* helloSaga() {
    console.log('hello saga')
}

export const delay = ms => new Promise(resolve => setTimeout(resolve,ms))

export function* incrementAsync() {
    console.log('incrementAsync')
    yield call(delay,1000);
    yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsync() {
    yield* takeEvery('INCREMENT_ASYNC',incrementAsync)
}

export function* watchFirstThreeIncrement() {
    for(let i=0;i<3;i++) {
        const action = yield take('INCREMENT_ASYNC')
    }
    yield;
    console.log("you've increated three times")
}

export function* sagaLogger(getState) {
    yield* takeEvery('*',function* logger(action) {
        const newstate = yield select()
        console.log('action',action)
        console.log('state',newstate)
    })
}

export default function* rootSaga() {
    yield [
        helloSaga(),
        watchIncrementAsync(),
        watchFirstThreeIncrement()
    ]
}