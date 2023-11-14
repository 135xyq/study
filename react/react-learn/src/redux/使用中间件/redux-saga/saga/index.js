import {all} from "redux-saga/effects"
import test from "./test"
export default function* index(){
    yield all([test()])
};