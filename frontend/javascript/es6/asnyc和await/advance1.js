/*



*/

const p = Promise.resolve();

async function pfun() {
    await 1;
    console.log(1);
}

p.then(re => {
    console.log(2);
}).then(re => {
    console.log(3);
});
pfun();