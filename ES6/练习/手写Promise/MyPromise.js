const MyPromise = (() => {
    const PENDING = 'pending',
        RESOLVED = 'resolved',
        REJECTED = 'rejected',
        PromiseValue = Symbol('PromiseValue'), //value值
        PromiseState = Symbol('PromiseState'), //状态
        changeStates = Symbol('changeStates'), //改变状态的函数
        thenables = Symbol('thenables'), //thenable队列
        catchables = Symbol('catchables'), //catchable队列
        settleHandle = Symbol("settleHandle"); //后续处理的通用函数


    return class MyPromise {

        /**
         * 改变当前的Promise的状态
         * @param {新的值} newValue 
         * @param {新的状态} newStates 
         * @returns 
         */
        [changeStates](newStates, newValue) {
            if (this[PromiseState] !== PENDING) {
                return;
            }
            this[PromiseState] = newStates;
            this[PromiseValue] = newValue;
        }

        /**
         * 
         * @param {*} handle 后续处理函数
         * @param {*} state 状态
         * @param {*} queue 处理队列
         */
        [settleHandle](handle, state, queue) {
            if (typeof handle !== "function") {
                return;
            }
            if (this[PromiseState] === state) {
                setTimeout(() => {
                    handle(this[PromiseValue]);
                }, 0);
            } else {
                queue.push(handle);
            }
        }

        constructor(executer) {
            this[PromiseState] = PENDING;
            this[PromiseValue] = undefined;
            const resolve = data => {
                this[changeStates](RESOLVED, data);
            };

            const reject = reason => {
                this[changeStates](REJECTED, reason);
            }
            try {
                executer(resolve, reject);
            } catch (err) {
                reject(err);
            }

            this[thenables] = []; //thenables队列
            this[catchables] = []; //catchable队列
        }

        then(thenable, catchable) {
            this[settleHandle](thenable, RESOLVED, this[thenables]);
            this.catch(catchable);
        }

        catch (catchable) {
            this[settleHandle](catchable, REJECTED, this[catchables]);
        }
    }

})();